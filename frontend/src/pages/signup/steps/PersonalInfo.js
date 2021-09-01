import React from 'react';
import {Steps} from '../index'
import ArrowRight from "../../../assets/images/arrow-right.png";

const PersonalInfo = ({activeStep,setActiveStep,active,setCompletedSteps}) => {
    const onNextClick = ()=>{
        setCompletedSteps(completed=>([...completed,activeStep])) 
        setActiveStep(Steps.empInfo)
    }
    
    return (
        <>
       {active && <div  className="stepperCard">
            <h2 className="stepperHeader">
                Personal Details
            </h2>
            <div className="stepperBody">
                <p className="info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ullam doloremque dolorum atque voluptatem libero facere rem aliquam numquam deserunt, provident veniam delectus illo dignissimos reprehenderit necessitatibus! Laborum, ducimus blanditiis.</p>
                
            </div>
            <div className="stepperFooter">
            <button className="btn" onClick={()=>setActiveStep(Steps.createPassword)} >Back</button>
                <button className="btn" onClick={()=>onNextClick() }>Save & Next <img src={ArrowRight} alt=''/></button>
            </div>
        </div>}
        </>
    );
}


export default PersonalInfo
