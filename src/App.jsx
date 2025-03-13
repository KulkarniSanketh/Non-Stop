import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ForgotPass from './Components/ForgotPass';
import Contact from './Components/Contact'; // Import Contact component
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/signup" element={<Signup />} />
    //     <Route path="/forgot-password" element={<ForgotPass />} />
    //     {/* <Route path="/contact" element={<Contact />} /> Add Contact route */}
    //   </Routes>
    // </Router>
    
    <div>
    {/* <Navbar />
    <Footer></Footer> */}

    </div>
  );
}

export default App;