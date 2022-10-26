import React from "react";
import Natete from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/Verite.png'
import Bakhita from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/Bakhita.png'
import Brenda from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/Bree.png'
import Lona from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/Lona.png'
import Mwihaki from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/Mwihaki.png'

import '/home/student/GhalaFinalWebpage/Ghala-Website/src/Team.css'

function Team(){
    return(
        <div className="team">
            <div className="meet_us">
                <section className="team_template">
                    <h4>Meet The Team</h4>
                    <h1>A team of Software Engineers full of tech senses</h1>
                </section>
            </div>
            <div>
            <div class="container">
            <div class="box">
              <div class="imgBx">
                <img src={Natete} alt='natete'></img>
              </div>
              <div class="content">
                <div>
                  <h2>Natete Verite</h2>
                  <h1>Software Developer</h1>
                </div>
              </div>
            </div>
            <div class="box1">
              <div class="box">
                <div class="imgBx">
                    <img src={Bakhita} alt='bakhita'></img>
                </div>
                <div class="content">
                  <div>
                    <h2>Bakhita Ismail</h2>
                    <h1>Software Developer
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="box2">
              <div class="box">
                <div class="imgBx">
                    <img src={Brenda} alt='brenda'></img>
                </div>
                <div class="content">
                  <div>
                    <h2>Brenda Murugi</h2>
                    <h1>UI/UX Designer
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="box3">
              <div class="box">
                <div class="imgBx">
                    <img src={Lona} alt='lona'></img>
                </div>
                <div class="content">
                  <div>
                    <h2>Lona Christabel</h2>
                    <h1>Software Developer
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="box4">
              <div class="box">
                <div class="imgBx">
                    <img src={Mwihaki} alt='mwihaki'></img>
                </div>
                <div class="content">
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