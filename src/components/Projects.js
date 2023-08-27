import React, {useRef} from 'react';
import './Awards.css'; 
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Scroll from './Scroll';


const projectsdata = [
    {
      title: "AttendINC",
      issuer: "National University of Singapore (NUS)",
      date: "Aug 2023",
      description: "Associated with School of Science and Technology, Singapore",
    },
    {
      title: "SST House Points (GrowCalth)",
      issuer: "Global FinTech Hackcelerator",
      date: "Jul 2023",
      description: "Associated with School of Science and Technology, Singapore",
    },
    {
      title: "Investigation of the wine yeast on the fermentation on the different types of rice",
      issuer: "Singapore Computer Society (SCS)",
      date: "Jun 2023",
      description: "Associated with School of Science and Technology, Singapore",
    },
    {
      title: "Making Greywater Safe",
      issuer: "iBuildSG",
      date: "Jun 2023",
      description: "Associated with School of Science and Technology, Singapore",
    },
    {
      title: "KKH Paediatrics Handbook Revamp",
      issuer: "SSTComputing+",
      date: "Apr 2023",
      description: "Associated with School of Science and Technology, Singapore",
    },
  ];
  
  const rightSideStyle = {
    backgroundColor: "#1D1E2D", // Example background color for the right side
    height: "100vh", // Set the height to 100vh (100% of viewport height)
    flex: 1,
    display: "flex", // Added to ensure children take up available height
    flexDirection: "column",
  };
const Projects = () => {
  const parallax = useRef(null);

  return (
    <Parallax pages={1} ref={parallax} style={rightSideStyle}>
      <Scroll />
      <ParallaxLayer offset={0}>
    <div style={rightSideStyle}>
    <h2 className="section-title">Projects</h2>
    <div className="awards-list" >
      {projectsdata.map((award, index) => (
        <div className="award-card" key={index} style={{backgroundColor: '#E1E3FF'}}>
          <div className="award-details">
            <h3 className="award-title">{award.title}</h3>
            <p className="award-issuer">{award.issuer} · {award.date}</p>
          </div>
          {/* <div className="award-description">
            {award.description}
          </div> */}
        </div>
      ))}
    </div>
  </div>
  </ParallaxLayer>

  </Parallax>

  );
};

export default Projects;
