// Copyright 2018-2022 argmin developers
//
// Licensed under the Apache License, Version 2.0 <LICENSE-APACHE or
// http://apache.org/licenses/LICENSE-2.0> or the MIT license <LICENSE-MIT or
// http://opensource.org/licenses/MIT>, at your option. This file may not be
// copied, modified, or distributed except according to those terms.

//! # `OptimizationResult`
//!
//! Returned by a solver and consists of the used operator and the last `IterState` of the solver.
//! Both can be accessed by the methods `operator()` and `state()`.
//!
//! The reference to the struct returned by `state()` allows one to for instance access the final
//! parameter vector or the final cost function value.
//!
//! ## Examples:
//!
#![cfg_attr(
    feature = "serde1",
    doc = r##"
```
# #![allow(unused_imports)]
# extern crate argmin;
# extern crate argmin_testfunctions;
# use argmin::core::{Error, Executor, State, CostFunction, Gradient};
# use argmin::solver::gradientdescent::SteepestDescent;
# use argmin::solver::linesearch::MoreThuenteLineSearch;
# use argmin_testfunctions::{rosenbrock_2d, rosenbrock_2d_derivative};
# use serde::{Deserialize, Serialize};
#
# #[derive(Clone, Default, Serialize, Deserialize)]
# struct Rosenbrock {
#     a: f64,
#     b: f64,
# }
#
# /// Implement `CostFunction` for `Rosenbrock`
# impl CostFunction for Rosenbrock {
#     /// Type of the parameter vector
#     type Param = Vec<f64>;
#     /// Type of the return value computed by the cost function
#     type Output = f64;
#
#     /// Apply the cost function to a parameter `p`
#     fn cost(&self, p: &Self::Param) -> Result<Self::Output, Error> {
#         Ok(rosenbrock_2d(p, 1.0, 100.0))
#     }
# }
#
# /// Implement `Gradient` for `Rosenbrock`
# impl Gradient for Rosenbrock {
#     /// Type of the parameter vector
#     type Param = Vec<f64>;
#     /// Type of the return value computed by the cost function
#     type Gradient = Vec<f64>;
#
#     /// Compute the gradient at parameter `p`.
#     fn gradient(&self, p: &Self::Param) -> Result<Self::Gradient, Error> {
#         Ok(rosenbrock_2d_derivative(p, 1.0, 100.0))
#     }
# }
#
# fn run() -> Result<(), Error> {
#     let cost = Rosenbrock { a: 1.0, b: 100.0 };
#     // Define initial parameter vector
#     let init_param: Vec<f64> = vec![-1.2, 1.0];
#     // Set up line search
#     let linesearch = MoreThuenteLineSearch::new();
#     // Set up solver
#     let solver = SteepestDescent::new(linesearch);
#     // Run solver
#     let result = Executor::new(cost, solver)
#         .configure(|config| config.param(init_param).max_iters(1))
#         // run the solver on the defined problem
#         .run()?;
// Get best parameter vector
let best_parameter = result.state().get_best_param_ref().unwrap();

// Get best cost function value
let best_cost = result.state().get_best_cost();

// Get the number of iterations
let num_iters = result.state().get_iter();
#     Ok(())
# }
#
# fn main() {
#     if let Err(ref e) = run() {
#         println!("{}", e);
#         std::process::exit(1);
#     }
# }
```
"##
)]
//!
//! More details can be found in the `IterState` documentation.

use crate::core::{ArgminFloat, Problem, State};
use num_traits::{Float, FromPrimitive};
use std::cmp::Ordering;
use std::fmt;

/// Final struct returned by the `run` method of `Executor`.
#[derive(Clone)]
pub struct OptimizationResult<O, I> {
    /// operator
    pub operator: Problem<O>,
    /// iteration state
    pub state: I,
}

impl<O, I> OptimizationResult<O, I> {
    /// Constructor
    pub fn new(operator: Problem<O>, state: I) -> Self {
        OptimizationResult { operator, state }
    }

    /// Return handle to operator
    pub fn operator(&self) -> &Problem<O> {
        &self.operator
    }

    /// Return handle to state
    pub fn state(&self) -> &I {
        &self.state
    }
}

impl<O, I> std::fmt::Display for OptimizationResult<O, I>
where
    I: State,
    I::Param: fmt::Debug,
{
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        writeln!(f, "OptimizationResult:")?;
        writeln!(
            f,
            "    param (best):  {}",
            if let Some(best_param) = self.state.get_best_param_ref() {
                format!("{:?}", best_param)
            } else {
                String::from("None")
            }
        )?;
        writeln!(f, "    cost (best):   {}", self.state.get_best_cost())?;
        writeln!(f, "    iters (best):  {}", self.state.get_last_best_iter())?;
        writeln!(f, "    iters (total): {}", self.state.get_iter())?;
        writeln!(
            f,
            "    termination:   {}",
            self.state.get_termination_reason()
        )?;
        writeln!(
            f,
            "    time:          {}",
            if let Some(time) = self.state.get_time() {
                format!("{:?}", time)
            } else {
                String::new()
            }
        )?;
        Ok(())
    }
}

impl<O, I: State> PartialEq for OptimizationResult<O, I>
where
    I::Float: ArgminFloat,
{
    fn eq(&self, other: &OptimizationResult<O, I>) -> bool {
        (self.state.get_best_cost() - other.state.get_best_cost()).abs() < I::Float::epsilon()
    }
}

impl<O, I: State> Eq for OptimizationResult<O, I> {}

impl<O, I: State> Ord for OptimizationResult<O, I> {
    fn cmp(&self, other: &OptimizationResult<O, I>) -> Ordering {
        let t = self.state.get_best_cost() - other.state.get_best_cost();
        if t.abs() < I::Float::epsilon() {
            Ordering::Equal
        } else if t > I::Float::from_f64(0.0).unwrap() {
            Ordering::Greater
        } else {
            Ordering::Less
        }
    }
}

impl<O, I: State> PartialOrd for OptimizationResult<O, I> {
    fn partial_cmp(&self, other: &OptimizationResult<O, I>) -> Option<Ordering> {
        Some(self.cmp(other))
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::core::{IterState, PseudoProblem};

    send_sync_test!(
        argmin_result,
        OptimizationResult<PseudoProblem, IterState<Vec<f64>, Vec<f64>, Vec<Vec<f64>>, Vec<Vec<f64>>, f64>>
    );
}