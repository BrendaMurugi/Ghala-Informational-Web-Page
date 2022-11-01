import './App.css';
// import '/home/student/GhalaFinalWebpage/Ghala-Website/src/Responsive.css'
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './home';
import About from './About'
import Team from './Team'
import Contact from './Contact';
import logo from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/logo-no-background 3.png';

function App() {
  return (
    <div className="app" >
<nav>
  <ul>
      <a href="#id-home">Home</a>
        <a href="#id-about">About</a>
        <a href="#id-team">Team</a>
        <a href="#id-contact">Contact Us</a>
        </ul>
        <img src={logo} alt='our_logo'></img>
        </nav>

  

      <Home/>
      <About />
      <Team />
      <Contact />

    </div>
  );
}

export default App;