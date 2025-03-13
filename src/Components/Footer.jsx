import React from "react";
import "../Footer.css";
import logo from "../images/logo.png";
import email from "../images/email.png";
import phone from "../images/phone.png";
import location from "../Images/location.png";
import linkdin from "../Images/linkedin.png";
import facebook from "../Images/facebook.png";
import instagram from "../Images/instagram.png";
import twitter from "../Images/twitter.png";


function Footer() {
  return (
    <div>
      <br />
      <img src={logo} alt="logo" className="logo" />
      <h1 className="text-center">Non-stop</h1>
      <hr className="container opacity-100" />
      <br />
      <div className="container">
        <div className="row">
            <div className="col" >
                <div className="row text-info">Reach us</div>
                <br />
                <div className="row"><img src={phone} alt="phone" className='footer-logo'/>91-93803-666-07</div>
                <div className="row"><img src={email} alt="email" className='footer-logo'/>nonstop@gmail.com</div>
                <div className="row"><img src={location} alt="location" className='footer-logo' />BMS College of Engineering,Basavangudi</div>
            </div>
            <div className="col">
                <div className="row text-info">Company</div>
                <br />
                <div className="row"><a href="" className="footer-link">About</a></div>
                <div className="row"><a href="" className="footer-link">Contact</a></div>
                <div className="row"><a href="" className="footer-link">Home</a></div>
            </div>
            <div className="col">
                <div className="row text-info">Quick Links</div>
                <br />
                <div className="row"><a href="" className="footer-link">Home</a></div>
                <div className="row"><a href="" className="footer-link">Contact</a></div>
                <div className="row"><a href="" className="footer-link">Profile</a></div>
                <div className="row"><a href="" className="footer-link">About</a></div>
            </div>
            <div className="col">
                <div className="row text-info">Follow Us</div>
                <br />
                <div className="row"><a href="https://www.instagram.com/geeks_of_coding/" target="_blank" className="footer-link">Instagram <img src={instagram} alt="" className='footer-media'/></a></div>
                <div className="row"><a href="" className="footer-link" target="_blank">Facebook <img src={facebook} alt="" className='footer-media'/></a></div>
                <div className="row"><a href="" className="footer-link" target="_blank">Twitter <img src={twitter} alt="" className='footer-media'target="_blank"/></a></div>
                <div className="row"><a href="https://www.linkedin.com/in/shree-sanketh-kulkarni-9b118325b/" className="footer-link" target="_blank">Linkedin <img src={linkdin} alt="" className='footer-media'/></a></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
