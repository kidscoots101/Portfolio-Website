import React from "react";
import SplitPage from "./SplitPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Awards from "./components/Awards";
import "./App.css"
import Projects from "./components/Projects";


const navLinkStyles = {
  display: "block",
  padding: "10px 20px",
  textDecoration: "none",
  color: "black",
  transition: "background-color 0.3s ease",
  fontWeight: "bold",
};

const navLinkHoverStyles = {
  ...navLinkStyles,
  backgroundColor: "lightgray",
  transition: "background-color 0.3s ease, font-size 0.3s ease", // Add font-size transition
  fontSize: "18px", // Font size for hover state (adjust as needed)
};
const App = () => {
  return (
     <Router>
      <div style={{ display: "flex", justifyContent: 'flex-end'  }}>
        <Link to="/" style={navLinkStyles}>
          Home
        </Link>
        <Link to="/awards" style={navLinkStyles}>
          Awards
        </Link>
        <Link to="/projects" style={navLinkStyles}>
          Projects
        </Link>
        {/* <Link to="/" style={navLinkStyles}>
          Home
        </Link> */}
      </div>
    
    <Routes>
      <Route path="/" element={<SplitPage />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/projects" element={<Projects />} />

    </Routes>
  </Router>
  );
};

export default App;
