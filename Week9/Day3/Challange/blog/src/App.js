import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    vegan: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(formData).toString();
    window.location.href = `http://localhost:3000/?${queryParams}`;
  };

  return (
    <div className="App">
      <h1>Form Component</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Gender:
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
          >
            <option value="">-- Please Choose a gender --</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Select your destination:
          <select
            name="destination"
            value={formData.destination}
            onChange={handleChange}
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="Japan">Japan</option>
            <option value="USA">USA</option>
            <option value="France">France</option>
          </select>
        </label>
        <br />
        <fieldset>
          <legend>Dietary restrictions:</legend>
          <label>
            <input
              type="checkbox"
              name="nutsFree"
              checked={formData.nutsFree}
              onChange={handleChange}
            />
            Nuts free
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="lactoseFree"
              checked={formData.lactoseFree}
              onChange={handleChange}
            />
            Lactose free
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              name="vegan"
              checked={formData.vegan}
              onChange={handleChange}
            />
            Vegan
          </label>
        </fieldset>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Entered information:</h2>
      <p>Your name: {formData.firstName} {formData.lastName}</p>
      <p>Your age: {formData.age}</p>
      <p>Your gender: {formData.gender}</p>
      <p>Your destination: {formData.destination}</p>
      <p>Your dietary restrictions:</p>
      <ul>
        <li>Nuts free: {formData.nutsFree ? 'Yes' : 'No'}</li>
        <li>Lactose free: {formData.lactoseFree ? 'Yes' : 'No'}</li>
        <li>Vegan meal: {formData.vegan ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
}

export default App;