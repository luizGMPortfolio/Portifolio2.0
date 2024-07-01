import About from "../routes/About.jsx";
import Skills from "../routes/Skills.jsx";
import Jorney from "../routes/Jorney.jsx";
import Project from "../routes/Project";
import Courses from "../routes/Courses.jsx";
import Repository from "../routes/Repository.jsx";
import { Route, Routes } from "react-router-dom";


function AnimateRoutes() {
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" exact element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Jorney" element={<Jorney />} />
      <Route path="/Project" element={<Project />} />
      <Route path="/Courses" element={<Courses />} />
      <Route path="/Repository" element={<Repository />} />
    </Routes>
  );
}

export default AnimateRoutes;
