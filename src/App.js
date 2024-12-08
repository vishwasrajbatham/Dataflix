import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <a href="/">
              <div className='logo-div'>
                <img src='/logoo.png' alt='/logoo.png' className='logo-img'/>
                <h1>Dataflix</h1>
              </div>
            </a>
            <ul className='nav_items'>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/services" Component={Services} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </main>
        <footer>
          <p className='footer-p'>&copy; 2024 Dataflix.in</p>
          <div className='footer-div'>
            <p>info@dataflix.in</p>
            <p>9084704058</p>
          </div>
          
        </footer>
      </div>
    </Router>
  );
}

export default App;
