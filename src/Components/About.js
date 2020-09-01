import React from 'react';
import logo from '../logo.svg';
import Headshotpic from '../Assets/headshot.png';


function About(){
    return(
        <>
        <img src= {Headshotpic} alt ="Headshot"/>
        <div>
            <h3> About Me</h3>
            <p>
                Solomon West is a skillful junior engineer who excels in using test-driven development to deploy components and applications.
                he is excited to create intuitive solutions to real-world problems.
            </p>
        </div>
        </>

    )
}
export default About;