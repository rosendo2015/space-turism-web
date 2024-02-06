import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Crew } from "./pages/Crew";
import { Projects } from "./pages/Projects";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    )
}