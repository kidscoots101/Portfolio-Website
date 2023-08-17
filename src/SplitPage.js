import React, { useState } from "react";
import NavigationSide from "./NavigationSide";
import "./splitpage.css";
import Main from "./components/Main";

const SplitPage = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const splitPageStyle = {
    display: "flex",
    height: "100vh", // Adjust the height as per your requirement
    backgroundColor: "#1E1E1E",
  };
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const leftSideStyle = {
    flex: isDrawerOpen ? "0 0 20%" : "0 0 0%", // Adjust the width as per your requirement
    backgroundColor: "#393646", // Example background color for the left side
    transition: "flex 0.3s", // Add a transition for smooth animation
  };

  const rightSideStyle = {
    flex: "0 0 100%", // Adjust the width as per your requirement
    backgroundColor: "#1D1E2D", // Example background color for the right side
    display: "flex", //remove if adding left side
    height: "100vh", //same here
  };

  return (
    <div>
      <div style={rightSideStyle}>
        <Main />
      </div>
    </div>
  );
};

export default SplitPage;
