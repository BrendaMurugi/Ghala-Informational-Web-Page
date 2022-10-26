import './App.css';
import Home from './home';
import About from './About'
import Team from './Team'
import Contact from './Contact';
import logo from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/logo-no-background 3.png';

function App() {
  return (
    <div className="app" >
      <header>
        <nav>
          <ul>
            <a href='home.js'>Home</a>
            <a href='About.js'>About</a>
            <a href='Team.js'>Team</a>
            <a href='Contact.js'>Contact Us</a>
          </ul>
          <img src={logo} alt='our_logo'></img>
        </nav>
      </header>
      <Home />
      <About />
      <Team />
      <Contact />
    </div>
  );
}

export default App;