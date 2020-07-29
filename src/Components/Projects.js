import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

let response = [
        { 
            name: 'Calculator', 
            url: 'https://west012.github.io/sampleComplexCalculator/',
            description: 'Proje',
            imgUrl: 'https://lh3.googleusercontent.com/ayZ2Lt9JU92sfGe5rO9CoxS7M_a0FZKhUkw9yHJwvOm5qIY742hmBNf4ItXNxsjDZvMI1qMrH7LxezZJMn6lQsNhk-a9YwXJTiotehc9jyVmHqPHMV7xPiPwD5JirXyomZIjUj2kshHevVU1xZ1DETU53nr_gTakaDn5f3lY1iIGotTXMDvX7YsWKHHYudOI0EvVPUMg7JnHUJx-nRCchUBFsS2532ueiT9Cni6BPHYW3v7gmCkUxIFPIH3CVblJVWt2gRGfSkNKYDJedW8vbupLal8sI6iBnJUzESSgRRN113uaVv-Td1NWgRTPu_5xEXCkDT0ImJqhyQDxvqbmSKTf4ZNYxPP4z1UhJwBwgOlwsyeKtNRscYpEbTxY9iYN450WNA-h7bPNIKFXaVPXpWlUL1BXkFCREXUfI2IzippRz7efw4pY6Vl-Tobhljra5gkXMfGYw16OAy5yelMFipmxg3Hz1HIYkmSFmOpky-uFL3uWkRFJ7WbAEVCbhvNnZhmuPKX25yoD1tzvi9LW6i4UlBiZK1t24GEs8vJiJaLk2kliHBokJH0akuvidYpgM3KKDtVDD7qHOqAeEzfGSmanfYDaAHfik8QlR9fsOoSCANNkpJ37lYoPJvn2zcgm8Ewxk9PA4NZ5l4r2zKKUFajnSOX2fciK2jN460iI2wWDwvLItr52kN1QloP9=w618-h782-no?authuser=0', 
            techUsed: ['JavaScript', 'html', 'CSS' ],
        },{ 
            name: 'Notflix API', 
            url: 'https://west012.github.io/NOTNetflix-API/',
            description: 'Project description 2',
            imgUrl: 'project2.com', 
            techUsed: ['JavaScript', 'html', 'CSS' ], 
        },{ 
            name: 'Minesweeper Game', 
            url: 'https://west012.github.io/Canvas-Game/',
            description: 'Project description 1',
            imgUrl: 'project3.com', 
            techUsed: ['JavaScript', 'html', 'CSS' ],
        },{ 
            name: 'Create, Read, Update, Delete', 
            description: 'Project description 2',
            imgUrl: 'https://photos.google.com/photo/AF1QipODNUYWLSlMJXVQaCL22CzZrrxRpkrnDclBPeof', 
            techUsed: ['PostgresSQL', 'Javascript', 'Express' ], 
        }
   ]
class Projects extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
        this.changeFilter= this.changeFilter.bind(this);
        // 
    }
   
    getAllProjects(){
        // fetch goes here in the future
        let allProjects = [];
        
        for(let i = 0; i < response.length; i++){
            if(response[i].techUsed.indexOf(this.state.filter) > -1 || !this.state.filter){    
                allProjects.push(
                <div className ='projectCard' key={i}>
                    <h1>{response[i].name}</h1>
                    <h6>{response[i].description}</h6>
                    <img src={response[i].imgUrl} height = '1px' alt ={response[i].name}/>
                    <p>Tech: {response[i].techUsed.join(' , ')}</p>
                    <Button className ={response[i].url}> View Project</Button>
                </div>)
            }    
        }
        console.log(allProjects);
        return allProjects
    }
    componentWillUpdate(){
        console.log('UPDATING');
    }

    changeFilter(event){
        const change = event.target.id
        console.log(change);
        this.setState({
            filter: change,
        })
    }

    
    render (){
        if(this.state.hasError){
            return(<h1>Theres an error please reload</h1>)
        } else{
            return(
                <div className ="container">
                    <h1>These are my Projects</h1>
                    <Button id = 'CSS' onClick = {this.changeFilter}>CSS</Button>
                    <Button id = 'HTML' onClick = {this.changeFilter}>HTML</Button>
                    <Button id = 'React' onClick = {this.changeFilter}>React</Button>
                    {this.getAllProjects()}
                </div>
            )
        }
    }

}

export default Projects;