import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import ErrorBoundary from './ErrorBoundary'; 
import "bootstrap/dist/css/bootstrap.min.css"; 
import PostList from './PostList';
import Example1 from './Example1'; 
import Example2 from './Example2'; 
import Example3 from './Example3'; 


//Ex1
// const HomeScreen = () => <h1>Home</h1>;
// const ProfileScreen = () => <h1>Profile screen</h1>;
// const ShopScreen = () => {
//   throw new Error('Error'); 
// };

// const App = () => (
//   <div className="container">
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">Main</NavLink>
//         <div className="collapse navbar-collapse">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/profile">Profile</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/shop">Shop</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>

//     <Routes>
//       <Route path="/" element={
//         <ErrorBoundary>
//           <HomeScreen />
//         </ErrorBoundary>
//       } />
//       <Route path="/profile" element={
//         <ErrorBoundary>
//           <ProfileScreen />
//         </ErrorBoundary>
//       } />
//       <Route path="/shop" element={
//         <ErrorBoundary>
//           <ShopScreen />
//         </ErrorBoundary>
//       } />
//     </Routes>
//   </div>
// );

//Ex2

// const App = () => {
//   return (
//     <div>
//       <PostList />
//     </div>
//   );
// };

//Ex3

// const App = () => {
//   return (
//     <div>
//       <Example1 />
//       <Example2 />
//       <Example3 />
//     </div>
//   );
// };

//Ex4

//I DIDN'T UNDERSTOOD HOW TO TURN ON CORS ON WEBHOOK SITE, SO I DID IT IN MY SERVER (server.js) So we got json data on console, but not on Webhook site

const App = () => {
  const fetchData = async () => {
    const url = 'http://localhost:3000/your-webhook-endpoint';
    const data = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.text(); 
      console.log('Sent data:', data);
      console.log('Response:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>Send Data</button>
    </div>
  );
};


export default App;



