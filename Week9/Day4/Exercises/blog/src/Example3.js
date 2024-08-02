import React, { Component } from 'react';
import data from './data.json'; 

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {data.Experiences.map((experience, index) => (
          <div key={index}>
            <h3>{experience.companyName}</h3>
            <img src={experience.logo} alt={experience.companyName} width="100" />
            <p><a href={experience.url} target="_blank" rel="noopener noreferrer">{experience.url}</a></p>
            {experience.roles.map((role, roleIndex) => (
              <div key={roleIndex}>
                <h4>{role.title}</h4>
                <p>{role.description}</p>
                <p><strong>Start Date:</strong> {role.startDate}</p>
                <p><strong>End Date:</strong> {role.endDate}</p>
                <p><strong>Location:</strong> {role.location}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;