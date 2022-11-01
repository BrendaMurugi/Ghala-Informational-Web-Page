import React from "react";
import Natete from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/Verite.png'
import Bakhita from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/Bakhita.png'
import Brenda from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/Bree.png'
import Lona from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/Lona.png'
import Mwihaki from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/Mwihaki.png'
import '/home/student/GhalaFinalWebpage/Ghala-Website/src/Team.css'
import '/home/student/GhalaFinalWebpage/Ghala-Website/src/Responsive.css'

function Team() {
  return (
    <div className="team">
      <div className="meet_us">
        <section className="team_template" id="id-team">
          <h4>Meet The Team</h4>
          <h1>A team of Software Engineers full of tech senses</h1>
        </section>
      </div>
      <div>
        <div className="container">
          <div className="box">
            <div className="imgBx">
              <img src={Natete} alt='natete'></img>
            </div>
            <div className="content">
              <div>
                <h2>Natete Verite</h2>
                <h1>Software Developer</h1>
              </div>
            </div>
          </div>
          <div className="box1">
            <div className="box">
              <div className="imgBx">
                <img src={Bakhita} alt='bakhita'></img>
              </div>
              <div className="content">
                <div>
                  <h2>Bakhita Ismail</h2>
                  <h1>Software Developer
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="box">
              <div className="imgBx">
                <img src={Brenda} alt='brenda'></img>
              </div>
              <div className="content">
                <div>
                  <h2>Brenda Murugi</h2>
                  <h1>UI/UX Designer
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="box3">
            <div className="box">
              <div className="imgBx">
                <img src={Lona} alt='lona'></img>
              </div>
              <div className="content">
                <div>
                  <h2>Lona Christabel</h2>
                  <h1>Software Developer
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="box4">
            <div className="box">
              <div className="imgBx">
                <img src={Mwihaki} alt='mwihaki'></img>
              </div>
              <div className="content">
                <div>
                  <h2>Rosemary Mwihaki</h2>
                  <h1>Software Developer
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Team;