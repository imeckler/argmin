(function() {var implementors = {
"argmin":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/checkpointing/struct.FileCheckpoint.html\" title=\"struct argmin::core::checkpointing::FileCheckpoint\">FileCheckpoint</a>",1,["argmin::core::checkpointing::file::FileCheckpoint"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/checkpointing/enum.CheckpointingFrequency.html\" title=\"enum argmin::core::checkpointing::CheckpointingFrequency\">CheckpointingFrequency</a>",1,["argmin::core::checkpointing::CheckpointingFrequency"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/enum.ArgminError.html\" title=\"enum argmin::core::ArgminError\">ArgminError</a>",1,["argmin::core::errors::ArgminError"]],["impl&lt;O, S, I&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.Executor.html\" title=\"struct argmin::core::Executor\">Executor</a>&lt;O, S, I&gt;",1,["argmin::core::executor::Executor"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/enum.KvValue.html\" title=\"enum argmin::core::KvValue\">KvValue</a>",1,["argmin::core::kv::KvValue"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.KV.html\" title=\"struct argmin::core::KV\">KV</a>",1,["argmin::core::kv::KV"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/observers/file/struct.WriteToFile.html\" title=\"struct argmin::core::observers::file::WriteToFile\">WriteToFile</a>",1,["argmin::core::observers::file::WriteToFile"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/observers/file/enum.WriteToFileSerializer.html\" title=\"enum argmin::core::observers::file::WriteToFileSerializer\">WriteToFileSerializer</a>",1,["argmin::core::observers::file::WriteToFileSerializer"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/observers/slog_logger/struct.SlogLogger.html\" title=\"struct argmin::core::observers::slog_logger::SlogLogger\">SlogLogger</a>",1,["argmin::core::observers::slog_logger::SlogLogger"]],["impl&lt;I&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/observers/struct.Observers.html\" title=\"struct argmin::core::observers::Observers\">Observers</a>&lt;I&gt;",1,["argmin::core::observers::Observers"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/observers/enum.ObserverMode.html\" title=\"enum argmin::core::observers::ObserverMode\">ObserverMode</a>",1,["argmin::core::observers::ObserverMode"]],["impl&lt;O&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.Problem.html\" title=\"struct argmin::core::Problem\">Problem</a>&lt;O&gt;<span class=\"where fmt-newline\">where\n    O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::core::problem::Problem"]],["impl&lt;O, S, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.OptimizationResult.html\" title=\"struct argmin::core::OptimizationResult\">OptimizationResult</a>&lt;O, S, I&gt;<span class=\"where fmt-newline\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    O: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    S: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::core::result::OptimizationResult"]],["impl&lt;P, G, J, H, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.IterState.html\" title=\"struct argmin::core::IterState\">IterState</a>&lt;P, G, J, H, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    H: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    J: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::core::state::iterstate::IterState"]],["impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.LinearProgramState.html\" title=\"struct argmin::core::LinearProgramState\">LinearProgramState</a>&lt;P, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::core::state::linearprogramstate::LinearProgramState"]],["impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/struct.PopulationState.html\" title=\"struct argmin::core::PopulationState\">PopulationState</a>&lt;P, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::core::state::populationstate::PopulationState"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/enum.TerminationStatus.html\" title=\"enum argmin::core::TerminationStatus\">TerminationStatus</a>",1,["argmin::core::termination::TerminationStatus"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/core/enum.TerminationReason.html\" title=\"enum argmin::core::TerminationReason\">TerminationReason</a>",1,["argmin::core::termination::TerminationReason"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/test_utils/struct.TestProblem.html\" title=\"struct argmin::core::test_utils::TestProblem\">TestProblem</a>",1,["argmin::core::test_utils::TestProblem"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/test_utils/struct.TestSparseProblem.html\" title=\"struct argmin::core::test_utils::TestSparseProblem\">TestSparseProblem</a>",1,["argmin::core::test_utils::TestSparseProblem"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/core/test_utils/struct.TestSolver.html\" title=\"struct argmin::core::test_utils::TestSolver\">TestSolver</a>",1,["argmin::core::test_utils::TestSolver"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/brent/struct.BrentOpt.html\" title=\"struct argmin::solver::brent::BrentOpt\">BrentOpt</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::brent::brentopt::BrentOpt"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/brent/struct.BrentRoot.html\" title=\"struct argmin::solver::brent::BrentRoot\">BrentRoot</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::brent::brentroot::BrentRoot"]],["impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/struct.ConjugateGradient.html\" title=\"struct argmin::solver::conjugategradient::ConjugateGradient\">ConjugateGradient</a>&lt;P, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::conjugategradient::cg::ConjugateGradient"]],["impl&lt;P, L, B, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/struct.NonlinearConjugateGradient.html\" title=\"struct argmin::solver::conjugategradient::NonlinearConjugateGradient\">NonlinearConjugateGradient</a>&lt;P, L, B, F&gt;<span class=\"where fmt-newline\">where\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::conjugategradient::nonlinear_cg::NonlinearConjugateGradient"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.FletcherReeves.html\" title=\"struct argmin::solver::conjugategradient::beta::FletcherReeves\">FletcherReeves</a>",1,["argmin::solver::conjugategradient::beta::FletcherReeves"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibiere.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibiere\">PolakRibiere</a>",1,["argmin::solver::conjugategradient::beta::PolakRibiere"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.PolakRibierePlus.html\" title=\"struct argmin::solver::conjugategradient::beta::PolakRibierePlus\">PolakRibierePlus</a>",1,["argmin::solver::conjugategradient::beta::PolakRibierePlus"]],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/conjugategradient/beta/struct.HestenesStiefel.html\" title=\"struct argmin::solver::conjugategradient::beta::HestenesStiefel\">HestenesStiefel</a>",1,["argmin::solver::conjugategradient::beta::HestenesStiefel"]],["impl&lt;L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/gaussnewton/struct.GaussNewtonLS.html\" title=\"struct argmin::solver::gaussnewton::GaussNewtonLS\">GaussNewtonLS</a>&lt;L, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::gaussnewton::gaussnewton_linesearch::GaussNewtonLS"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/gaussnewton/struct.GaussNewton.html\" title=\"struct argmin::solver::gaussnewton::GaussNewton\">GaussNewton</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::gaussnewton::gaussnewton_method::GaussNewton"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/goldensectionsearch/struct.GoldenSectionSearch.html\" title=\"struct argmin::solver::goldensectionsearch::GoldenSectionSearch\">GoldenSectionSearch</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::goldensectionsearch::GoldenSectionSearch"]],["impl&lt;L&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/gradientdescent/struct.SteepestDescent.html\" title=\"struct argmin::solver::gradientdescent::SteepestDescent\">SteepestDescent</a>&lt;L&gt;<span class=\"where fmt-newline\">where\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::gradientdescent::steepestdescent::SteepestDescent"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/landweber/struct.Landweber.html\" title=\"struct argmin::solver::landweber::Landweber\">Landweber</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::landweber::Landweber"]],["impl&lt;P, G, L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/struct.BacktrackingLineSearch.html\" title=\"struct argmin::solver::linesearch::BacktrackingLineSearch\">BacktrackingLineSearch</a>&lt;P, G, L, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::linesearch::backtracking::BacktrackingLineSearch"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.ArmijoCondition.html\" title=\"struct argmin::solver::linesearch::condition::ArmijoCondition\">ArmijoCondition</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::linesearch::condition::armijo::ArmijoCondition"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.GoldsteinCondition.html\" title=\"struct argmin::solver::linesearch::condition::GoldsteinCondition\">GoldsteinCondition</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::linesearch::condition::goldstein::GoldsteinCondition"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.StrongWolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::StrongWolfeCondition\">StrongWolfeCondition</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::linesearch::condition::strongwolfe::StrongWolfeCondition"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/condition/struct.WolfeCondition.html\" title=\"struct argmin::solver::linesearch::condition::WolfeCondition\">WolfeCondition</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::linesearch::condition::wolfe::WolfeCondition"]],["impl&lt;P, G, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/struct.HagerZhangLineSearch.html\" title=\"struct argmin::solver::linesearch::HagerZhangLineSearch\">HagerZhangLineSearch</a>&lt;P, G, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::linesearch::hagerzhang::HagerZhangLineSearch"]],["impl&lt;P, G, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/linesearch/struct.MoreThuenteLineSearch.html\" title=\"struct argmin::solver::linesearch::MoreThuenteLineSearch\">MoreThuenteLineSearch</a>&lt;P, G, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::linesearch::morethuente::MoreThuenteLineSearch"]],["impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/neldermead/struct.NelderMead.html\" title=\"struct argmin::solver::neldermead::NelderMead\">NelderMead</a>&lt;P, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::neldermead::NelderMead"]],["impl&lt;L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/newton/struct.NewtonCG.html\" title=\"struct argmin::solver::newton::NewtonCG\">NewtonCG</a>&lt;L, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::newton::newton_cg::NewtonCG"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/newton/struct.Newton.html\" title=\"struct argmin::solver::newton::Newton\">Newton</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::newton::newton_method::Newton"]],["impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/particleswarm/struct.ParticleSwarm.html\" title=\"struct argmin::solver::particleswarm::ParticleSwarm\">ParticleSwarm</a>&lt;P, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::particleswarm::ParticleSwarm"]],["impl&lt;T, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/particleswarm/struct.Particle.html\" title=\"struct argmin::solver::particleswarm::Particle\">Particle</a>&lt;T, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::particleswarm::Particle"]],["impl&lt;L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/struct.BFGS.html\" title=\"struct argmin::solver::quasinewton::BFGS\">BFGS</a>&lt;L, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::quasinewton::bfgs::BFGS"]],["impl&lt;L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/struct.DFP.html\" title=\"struct argmin::solver::quasinewton::DFP\">DFP</a>&lt;L, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::quasinewton::dfp::DFP"]],["impl&lt;L, P, G, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/struct.LBFGS.html\" title=\"struct argmin::solver::quasinewton::LBFGS\">LBFGS</a>&lt;L, P, G, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    G: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::quasinewton::lbfgs::LBFGS"]],["impl&lt;L, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/struct.SR1.html\" title=\"struct argmin::solver::quasinewton::SR1\">SR1</a>&lt;L, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    L: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::quasinewton::sr1::SR1"]],["impl&lt;R, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/quasinewton/struct.SR1TrustRegion.html\" title=\"struct argmin::solver::quasinewton::SR1TrustRegion\">SR1TrustRegion</a>&lt;R, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::quasinewton::sr1_trustregion::SR1TrustRegion"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"enum\" href=\"argmin/solver/simulatedannealing/enum.SATempFunc.html\" title=\"enum argmin::solver::simulatedannealing::SATempFunc\">SATempFunc</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::simulatedannealing::SATempFunc"]],["impl&lt;F, R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/simulatedannealing/struct.SimulatedAnnealing.html\" title=\"struct argmin::solver::simulatedannealing::SimulatedAnnealing\">SimulatedAnnealing</a>&lt;F, R&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::simulatedannealing::SimulatedAnnealing"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/struct.CauchyPoint.html\" title=\"struct argmin::solver::trustregion::CauchyPoint\">CauchyPoint</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::trustregion::cauchypoint::CauchyPoint"]],["impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/struct.Dogleg.html\" title=\"struct argmin::solver::trustregion::Dogleg\">Dogleg</a>&lt;F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::trustregion::dogleg::Dogleg"]],["impl&lt;P, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/struct.Steihaug.html\" title=\"struct argmin::solver::trustregion::Steihaug\">Steihaug</a>&lt;P, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::trustregion::steihaug::Steihaug"]],["impl&lt;R, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"argmin/solver/trustregion/struct.TrustRegion.html\" title=\"struct argmin::solver::trustregion::TrustRegion\">TrustRegion</a>&lt;R, F&gt;<span class=\"where fmt-newline\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,\n    R: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.73.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,</span>",1,["argmin::solver::trustregion::trustregion_method::TrustRegion"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()