import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Projects';
import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
      <Navbar/>
      <header className="App-header">
      <Switch>
        <Route path ="/" component ={Home} exact/>
        <Route path ="/about" component ={About}/>
        <Route path ="/projects" component ={Project}/>
        <Route component ={Error}/>
      </Switch>
      
        

      </header>
    </div>
  );
}

export default App;
