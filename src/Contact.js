import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import '/home/student/GhalaFinalWebpage/Ghala-Website/src/Contact.css'
import '/home/student/GhalaFinalWebpage/Ghala-Website/src/Responsive.css'

function Contact() {
    return (
        <div className="contact" id="id-contact">
            <div className="social">
                <a href="#" target="_blank"><i className="fab fa-linkedin"><FaLinkedin></FaLinkedin></i></a>
                <a href="#" target="_blank"><i className="fab fa-twitter"><FaTwitter></FaTwitter></i></a>
                <a href="#" target="_blank"><i className="fab fa-instagram"><FaInstagram></FaInstagram></i></a>
            </div>
            <p className="end">CopyRight By Ghala | 2022</p>
            <div className="ours">
                <h1>Seeing farmers succeed and empowered to enjoy lasting prosperity is what we aim to do. The grain moisture detector helps farmers improve the  <br></br> quality of their grains and store grains for more than 2 years without insects, mold and damage.</h1>
            </div>
        </div>
    )
}
export default Contact;