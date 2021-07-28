import React, {Component} from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Project from './Components/Projects';
import InstaTix from './Components/InstaTix';
import {Switch, Route} from 'react-router-dom';
import Particles from 'react-particles-js'


class App extends Component {
  render(){
      return (
        <div className="App">
        <Navbar/>
        <Particles 
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 2
            				}
            			}
            		}
            	}}
              style={{
                backgroundColor: '#282c34',
                zIndex: '-3',
                width: '100vw',
                position: 'absolute',
                top: '0',
                left: '0',
                height: 'auto'
              }}
            />
        <header className="App-header">
          
        <Switch>
          <Route path ="/" component ={Home} exact/>
          <Route path ="/about" component ={About}/>
          <Route path ="/projects" component ={Project}/>
          <Route path = "/InstaTix" component ={InstaTix}/>
          {/* <Route path = "https://github.com/west012" component={}/> */}
          <Route component ={Error}/>
        </Switch>
        </header>
      </div>
    );
  }
}

export default App;
