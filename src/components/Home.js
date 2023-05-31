import React from "react";
import "./Intro.css";

const ExperienceCard = ({ title, description, image }) => (
  <div className="experience-card">
    <img src={image} alt={title} className="experience-image" />
    <div className="experience-details">
      <h3 className="experience-title">{title}</h3>
      <p className="experience-description">{description}</p>
    </div>
  </div>
);

export default function Intro() {
  const experiences = [
    {
      title: "CTO (React) of SST Inc.",
      description:
        "Being promoted to CTO, I had the opportunity to create engaging lesson curriculum to help teach like-minded aspiring developers the React framework",
      image: require("../assets/cto.jpeg"),
    },
    {
      title: "Task Force (React) of SST Inc.",
      description:
        "I spent eight months aiding the CTOs teaching their React lesson curriculum,",
      image: require("../assets/task-force.jpeg"),
    },
    {
      title: "Founder and CEO of Growcalth",
      description: "A small start-up founded by a group of friends. ",
      image: require("../assets/groupsf.jpeg"),
    },

    // Add more experiences here
  ];
  return (
    <div className="my-experiences">
      <h2 className="section-heading">My experiences</h2>
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            description={experience.description}
            image={experience.image}
          />
        ))}
      </div>
    </div>
  );
}
