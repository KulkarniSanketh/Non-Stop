import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import routing components
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ForgotPass from './Components/ForgotPass';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for each component */}
        <Route path="/" element={<Login />} /> {/* Default route (Login page) */}
        <Route path="/signup" element={<Signup />} /> {/* Signup page */}
        <Route path="/forgot-password" element={<ForgotPass />} /> {/* Forgot Password page */}
      </Routes>
    </Router>
  );
}

export default App;