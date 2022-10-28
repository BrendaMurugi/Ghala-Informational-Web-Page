import './App.css';
// import '/home/student/GhalaFinalWebpage/Ghala-Website/src/Responsive.css'
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './home';
import About from './About'
import Team from './Team'
import Contact from './Contact';
import logo from '/home/student/GhalaFinalWebpage/Ghala-Website/src/pictures/logo-no-background 3.png';

function App() {
  return (
    <div className="app" >
      <Router>

      <Switch>
          <Route path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/team' component={Team}/>
          <Route path='/contact' component={Contact}/>
               
        </Switch>
        
      <nav>
          <ul>
           <Link to='/'>Home</Link>
           <Link to='/about'>About</Link>
           <Link to='/team'>Team</Link>
           <Link to='/contact'>Contact Us</Link>
          </ul>
          <img src={logo} alt='our_logo'></img>
        </nav>

      </Router>
      
        
      <About />
      <Team />
      <Contact />
      
    </div>
  );
}

export default App;