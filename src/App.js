import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import FoundResearch from "./components/Pages/Found_Res"
import SystemsResearch from "./components/Pages/Sys_Res"
import Applications from "./components/Pages/Apply";
import Guidelines from "./components/Pages/Guidelines"
import Committee from './components/Pages/Committee'
import Footer from "./components/Pages/Footer"
import Registration from "./components/Pages/Registrations"

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/foundational_research" element={<FoundResearch />} />
        <Route path="/systems_research" element={<SystemsResearch />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/author_guidelines" element={<Guidelines />} />
        <Route path="/organizing_committee" element={<Committee />} />
        <Route path="/registrations" element={<Registration />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;