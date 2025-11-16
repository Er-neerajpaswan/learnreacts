//Boilerplate code:

import React from 'react'; //Hooks , stateless App
import Title from '../components/Title';
import UnorderedList from '../components/UnorderedList';    

function About() {
    return (
        <div>  
            <Title name="Node JS Guide"
             collegeName={"Anity"}
             schoolName={"DPS"} 
             rollNo={"12"}
             contactNumber={"1233455"}/>
            {/* <UnorderedList/> */}
            {/* <Title name="General" />
            <Title name="Node JS Core Concept" /> */}

        </div>
    ) 
}

export default About;

//Manufactureing firm-screens
