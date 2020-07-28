import React, {Component} from 'react';
let response = [
        { 
            name: 'Calculator', 
            url: 'https://project1.io',
            description: 'Project description 1',
            imgUrl: 'project1.com', 
            techUsed: ['JavaScript', 'html' ],
        },{ 
            name: 'Notflix API', 
            url: 'https://project2.io',
            description: 'Project description 2',
            imgUrl: 'project2.com', 
            techUsed: ['JavaScript', 'html' ], 
        },{ 
            name: '', 
            url: 'https://project3.io',
            description: 'Project description 1',
            imgUrl: 'project3.com', 
            techUsed: ['JavaScript', 'html' ],
        },{ 
            name: 'project4', 
            url: 'https://project4.io',
            description: 'Project description 2',
            imgUrl: 'project4.com', 
            techUsed: ['JavaScript', 'html' ], 
        }
   ]
class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {hasError: false}
    }
    state = {

    }
    getAllProjects(){
        // fetch goes here in the future
        let allProjects = [];
        
        for(let i = 0; i < response.length; i++){
        allProjects.push(
        <div className ='projectCard' key={i}>
            <h1>{response[i].name}</h1>
            <h6>{response[i].description}</h6>
            <img src={response[i].imgUrl} height = '100px' alt ={response[i].name}/>
            <p>Tech: {response[i].techUsed.join(', ')}</p>
        </div>)
        }
        return allProjects
    }
    render (){
        if(this.state.hasError){
            return(<h1>Theres an error please reload</h1>)
        } else{
            return(
                <div className ="container">
                <h1>These are my Projects</h1>
                <h2>Project 1</h2>
                <h3>Project 2</h3>
                <h4>Project 3</h4>
                </div>
            )
        }
    }

}

export default Projects;