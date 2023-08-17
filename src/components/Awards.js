import React, {useRef} from 'react';
import './Awards.css'; 
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Scroll from './Scroll';


const awardsData = [
    {
      title: "CTPS (CS0) Final Contest",
      issuer: "National University of Singapore (NUS)",
      date: "Aug 2023",
      description: "Associated with School of Science and Technology, Singapore",
    },
    {
      title: "AI in Finance Global Challenge",
      issuer: "Global FinTech Hackcelerator",
      date: "Jul 2023",
      description: "Associated with School of Science and Technology, Singapore",
    },
    {
      title: "Splash Awards 2023",
      issuer: "Singapore Computer Society (SCS)",
      date: "Jun 2023",
      description: "Associated with School of Science and Technology, Singapore",
    },
    {
      title: "iBuildSG Club Pinnacle Competition 2023 Winner | Third Place",
      issuer: "iBuildSG",
      date: "Jun 2023",
      description: "Associated with School of Science and Technology, Singapore",
    },
    {
      title: "Competition on sustainable design, energy efficiency, and universal design. Abstraction and Algorithms (Gold)",
      issuer: "SSTComputing+",
      date: "Apr 2023",
      description: "Associated with School of Science and Technology, Singapore",
    },
    {
      title: "Systems and Communications - Computer Architecture (Bronze)",
      issuer: "SSTComputing+",
      date: "Apr 2023",
      description: "Associated with School of Science and Technology, Singapore",
    },
    {
        title: "National Olympiad in Informatics (NOI) Finalist",
        issuer: "National University of Singapore (NUS)",
        date: "Mar 2023",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "Perse Coding Team Challenge | Participant",
        issuer: "Perse Coding Team Challenge",
        date: "Feb 2023",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "Hack&Roll 2023 | Best Pre-University Hack",
        issuer: "NUSHackers",
        date: "Jan 2023",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "International Science and Invention Fair 2022 | GOLD Medal",
        issuer: "International Science and Invention Fair 2022",
        date: "Nov 2022",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "International Research Project Olympiade (IRPrO) | BRONZE Award",
        issuer: "Indonesia Scientific Society",
        date: "Aug 2022",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "AOGS-SDG Action Video Contest",
        issuer: "Asia Oceana Geosciences Society",
        date: "Jun 2022",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "Opportunity X - STEM Research Conference 2022 (Certificate of Impact Award)",
        issuer: "Opportunity X",
        date: "Jun 2022",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "Computational and Algorithmic Thinking (CAT) 2022 | BRONZE Award",
        issuer: "Australian Maths Trust",
        date: "May 2022",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "Singapore and Asian Schools Math Olympiad 2022 | Honourable Mention | 23rd in School",
        issuer: "Singapore and Asian Schools Math Olympiads",
        date: "May 2022",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "Astrigue 2022 | Top 8",
        issuer: "Hwa Chong Astronomy Club",
        date: "Apr 2022",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "International Math Contest 2022 | SILVER Award | Competitive Internationally",
        issuer: "RSM Foundation",
        date: "Feb 2022",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "International Math Contest 2021 | SILVER Award | Competitive Internationally",
        issuer: "RSM Foundation",
        date: "Feb 2021",
        description: "Associated with School of Science and Technology, Singapore",
      },
      {
        title: "JCH007",
        issuer: "JUNIOR SCIENTIST VIDEO CONTEST 2023",
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
const Awards = () => {
  const parallax = useRef(null);

  return (
    <Parallax pages={3} ref={parallax} style={rightSideStyle}>
      <Scroll />
      <ParallaxLayer offset={0}>
    <div style={rightSideStyle}>
    <h2 className="section-title">Honors and Awards</h2>
    <div className="awards-list" >
      {awardsData.map((award, index) => (
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

export default Awards;
