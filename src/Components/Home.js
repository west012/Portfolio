import React from 'react';
import Typed from 'react-typed.js';

function Home(){
    return(
        <div>
        <Typed strings = {["Hello I'm Solomon "]}/>
        <p>Throw me at any project with</p>
        <Typed strings = {["Amazon Web Services","HTML5","CSS","Javascript","Differential Equations","App Deployment","Shell Scripts"]}/>

        </div>

    )
}
export default Home;
