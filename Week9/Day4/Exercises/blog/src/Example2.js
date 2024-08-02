import React, { Component } from 'react';
import data from './data.json';

class Example2 extends Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        {data.Skills.map((skillArea, areaIndex) => (
          <div key={areaIndex}>
            <h3>{skillArea.Area}</h3>
            <ul>
              {skillArea.SkillSet.map((skill, skillIndex) => (
                <li key={skillIndex}>
                  {skill.Name} {skill.Hot && <span style={{ color: 'red' }}>(Hot)</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;