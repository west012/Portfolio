import React from 'react';
import Typed from 'react-typed.js';

function Home(){

    return(
        <div>

        <Typed strings = {["Hello I'm Solomon "]}/>
        <p>Throw me at any project with</p>
        <Typed strings = {["Amazon Web Services","HTML5","CSS","Javascript","Differential Equations","App Deployment","Shell Scripts"]}/>
        <onClickMailtoHandler variant ="contained" label="Contact me Here" mailto="mailto:westxsw@outlook.com" />
        </div>
        

    
    )
}
export default Home;
