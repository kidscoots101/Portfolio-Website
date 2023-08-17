import React from 'react';
import './Education.css'; // Import your CSS for styling
import educationImage from '../assets/school-logo.png'

const educationData = [
  {
    degree: "O-Levels",
    institution: "School of Science and Technology, Singapore",
    date: "2021-2024"
  }
];
const Education = () => {
    return (
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-list">
          {educationData.map((education, index) => (
            <div className="education-card" key={index}>
              <div className="education-content">
                <div className="education-image">
                  <img src={educationImage} alt="Education" />
                </div>
                <div className="education-details">
                  <h3 className="education-degree">{education.degree}</h3>
                  <p className="education-institution">{education.institution}</p>
                  <p className="education-date">{education.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
          }

export default Education;

