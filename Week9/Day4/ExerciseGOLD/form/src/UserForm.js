import React, { Component } from 'react';
import axios from 'axios';

//ExGold 1

// class UserForm extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       email: '',
//     };
//   }

//   handleChange = (event) => {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const { username, email } = this.state;
//     const data = { username, email };

//     try {
//       const response = await fetch('http://localhost:5000/api/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();

//       console.log('Submitted data (JSON):', JSON.stringify(data, null, 2));
//       console.log('Response from server (JSON):', JSON.stringify(result, null, 2));

//     } catch (error) {
//       console.error('Error during fetch:', error.message);
//     }
//   }

//   render() {
//     const { username, email } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           <label>
//             Username:
//             <input
//               type="text"
//               name="username"
//               value={username}
//               onChange={this.handleChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={email}
//               onChange={this.handleChange}
//             />
//           </label>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     );
//   }
// }

//ExGOLD 2

class UserForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userId: '',
        title: '',
        body: '',
      };
    }
  
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }
  
    handleSubmit = async (event) => {
      event.preventDefault();
  
      const { userId, title, body } = this.state;
      const data = { userId, title, body };
  
      try {
        const response = await axios.post('http://localhost:5000/api/submit', data);
        console.log('Submitted data (JSON):', JSON.stringify(data, null, 2));
        console.log('Response from server (JSON):', response.data);
      } catch (error) {
        console.error('Error during fetch:', error.message);
      }
    }
  
    render() {
      const { userId, title, body } = this.state;
  
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>
              User ID:
              <input
                type="text"
                name="userId"
                value={userId}
                onChange={this.handleChange}
                placeholder="Enter user ID"
              />
            </label>
          </div>
          <div>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={title}
                onChange={this.handleChange}
                placeholder="Enter title"
              />
            </label>
          </div>
          <div>
            <label>
              Body:
              <textarea
                name="body"
                value={body}
                onChange={this.handleChange}
                placeholder="Enter body"
              />
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
export default UserForm;

