import React from 'react';
import {Steps} from '../index'
import ArrowRight from "../../../assets/images/arrow-right.png";


const UploadDocs = ({activeStep,setActiveStep,active,setCompletedSteps}) => {

    const onNextClick = ()=>{
        setCompletedSteps(completed=>([...completed,activeStep])) 
        setActiveStep(Steps.complete)
    }

    
    return (
        <>
       {active && <div  className="stepperCard">
            <h2 className="stepperHeader">
                Upload Docs
            </h2>
            <div className="stepperBody">
                <p className="info">Because there will be documents that you need to prepare to apply for the loan, let's start off by creating a password so that you can login to your account once you have these document ready.</p>
               
            </div>
            <div className="stepperFooter">
            <button className="btn" onClick={()=>setActiveStep(Steps.empInfo)} >Back</button>

                <button className="btn" onClick={()=>onNextClick()}>Save & Next <img src={ArrowRight} alt=''/></button>
            </div>
        </div>}
        </>
    );
}


export default UploadDocs
