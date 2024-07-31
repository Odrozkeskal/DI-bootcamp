import React, { Component } from 'react';
import './styles.css'; 
import './Exercise.css';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

class Exercise extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        {/* <h1>  */}
        <h1 style={style_header}>
          Some text
        </h1>

        {/*paragraph */}
        <p className="para">This is a paragraph.</p>

        {/* Link */}
        <a href="https://google.com" target="_blank" rel="noopener noreferrer">
          google.com
        </a>

        {/* Form */}
        <h3>This is a form</h3>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
        <br />

        {/*  React logo picture */}
        <img 
          src="https://reactjs.org/logo-og.png" 
          alt="React Logo" 
          width="200" 
          height="200"
          style={{ display: 'block', margin: '0 auto' }} 
        />

        {/* List */}
        <h5>This is a list</h5>
        <ul className="styled-list">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    );
  }
}

export default Exercise;