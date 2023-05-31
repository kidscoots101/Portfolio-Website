import React from "react";
import "./skills.css";

const SkillsCard = ({ logo, title, description }) => {
  return (
    <div className="card">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="content-container">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
const InterestsCard = ({ logo, title, description }) => {
  return (
    <div className="card">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="content-container">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};
const TechCard = ({ logo, title, description }) => {
  return (
    <div className="card">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="content-container">
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default function Skills() {
  const tech = [
    {
      logo: require("../assets/js.png"),
      title: "Javascript",
      description: "Always comes in handy.",
    },
    {
      logo: require("../assets/react.png"),
      title: "React/React Native",
      description: "Usually for Mobile/Web applications.",
    },
    {
      logo: require("../assets/html.png"),
      title: "HTML",
      description: "Structuring is my favourite thing.",
    },
    {
      logo: require("../assets/css.png"),
      title: "CSS",
      description: "I'm super creative.",
    },
    {
      logo: require("../assets/visual-studio.png"),
      title: "Visual Studio Code",
      description: "Where the magic happens.",
    },
    {
      logo: require("../assets/node.png"),
      title: "Node.js",
      description: "Pain.",
    },
    {
      logo: require("../assets/github.png"),
      title: "Github",
      description: "Even more pain.",
    },
  ];
  const skills = [
    {
      logo: require("../assets/lead.png"),
      title: "Leadership",
      description: "Can't spell group without the 'u'.",
    },
    {
      logo: require("../assets/stem.png"),
      title: "STEM",
      description: "Fun.",
    },
    {
      logo: require("../assets/computational.png"),
      title: "Computational Thinking",
      description: "Really helps.",
    },
    {
      logo: require("../assets/research.png"),
      title: "Research",
      description: "I love exploring new things.",
    },
  ];

  const interests = [
    {
      logo: require("../assets/drum.png"),
      title: "Music",
      description: "Yes, I have a life.",
    },
    {
      logo: require("../assets/plane.png"),
      title: "Aviation",
      description: "Fly me to the moon.",
    },
    {
      logo: require("../assets/computer.png"),
      title: "Computing",
      description: "Come to my 127.0.0.1 and I’ll give you sudo access.",
    },
    {
      logo: require("../assets/scout.png"),
      title: "Scouting",
      description: "New friends are always welcomed!",
    },
    {
      logo: require("../assets/startup.png"),
      title: "Start-ups",
      description: "New friends are always welcomed!",
    },
  ];

  return (
    <div>
      <div className="expertise">
        <text className="section-heading">Expertise</text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ margin: 50 }}>
          <p
            style={{
              color: "#E1E3FF",
              fontWeight: "bold",
              fontSize: 30,
              marginBottom: -5,
              textAlign: "center",
            }}
          >
            SKILLS
          </p>
          <div>
            {skills.map((skill, index) => (
              <SkillsCard
                key={index}
                title={skill.title}
                description={skill.description}
                logo={skill.logo}
              />
            ))}
          </div>
        </div>
        <div
          style={{
            // margin: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              color: "#E1E3FF",
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
              marginBottom: -5,
            }}
          >
            TECH
          </p>
          <div>
            {tech.map((tech, index) => (
              <TechCard
                key={index}
                title={tech.title}
                description={tech.description}
                logo={tech.logo}
              />
            ))}
          </div>
        </div>
        <div style={{ margin: 50 }}>
          <p
            style={{
              color: "#E1E3FF",
              fontWeight: "bold",
              fontSize: 30,
              textAlign: "center",
              marginBottom: -5,
            }}
          >
            INTERESTS
          </p>
          <div>
            {interests.map((interest, index) => (
              <InterestsCard
                key={index}
                title={interest.title}
                description={interest.description}
                logo={interest.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
