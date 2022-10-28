import React from "react";
import device from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/Group 2.png'
import image1 from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/logo-color.png'
import image2 from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/logo-black.png'
import image3 from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/logo-white.png'
import video from '/home/student/GhalaFinalWebpage/Ghala-Website/src/Videos/gmm video.mp4'
import '/home/student/GhalaFinalWebpage/Ghala-Website/src/About.css'
// import '/home/student/GhalaFinalWebpage/Ghala-Website/src/Responsive.css'

function About() {
    return (
        <div className="about_gmm">
            <div className="about">
                <h2>Moisture Testing Made Easy</h2>
                <p>With Grain Moisture Detector, grain farmers, aggregators, <br></br> commodity traders, feed producers and warehouse <br></br>operators can measure the moisture content in their <br></br>grains with ease. <br></br> <br></br> <br></br>
                    Knowing whether your grains are well dried helps you <br></br>reduce post-harvest losses and aflatoxins in your grains.</p>
                <a href="#About.js"><button>Demo</button></a>
                <div className="gmm">
                    <img src={device} alt='our_device'></img>
                </div>
                <h4>Take a Moisture Reading in 3 Simple Steps</h4>
                <div className="images">
                    <div className="image1">
                        <img src={image1} alt='image_one'></img>
                        <h1>01. Power the Meter</h1>
                        <p>Insert grains into the device and power the meter.</p>
                    </div>

                    <div className="image2">
                        <img src={image2} alt='image_two'></img>
                        <h1>02. Measure Moisture Content</h1>
                        <p>Insert grains and measure the moisture content of your grain sample</p>
                    </div>
                    <div className="image3">
                        <img src={image3} alt='image_three'></img>
                        <h1>03. Take Reading</h1>
                        <p>Press the start button to take a reading and display the moisture content</p>
                    </div>
                </div>
                <h6>How it Works</h6>
                <video src={video} height='700' typeof="video/mp4" controls></video>
            </div>
        </div>
    )
}
export default About;