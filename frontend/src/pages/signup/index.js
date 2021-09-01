import React, { useState } from "react";
import Stepper from "../../shared/components/stepper/Stepper";
import UploadDocs from "./steps/UploadDocs";
import CreatePassword from "./steps/CreatePassword";
import PersonalInfo from "./steps/PersonalInfo";
import EmploymentInfo from "./steps/EmploymentInfo";
import Complete from "./steps/Complete";
import './steps/steps.scss'
import LogoImg from "../../assets/images/Logo.png";
export const Steps = Object.freeze({
  createPassword: {key: "CREATE_PASSWORD",stepNo:1},
  personalInfo: {key: "PERSONAL_INFO",stepNo:2},
  empInfo: {key: "EMPLOYMENT_INFO",stepNo:3},
  uploadDoc: {key: "UPLOAD_DOCUMENT",stepNo:4},
  complete: {key: "COMPLETE",stepNo:5},
});



const steps = [
  {
    header: "CREATE YOUR ACCOUNT",
    stepKey: Steps.createPassword,
    component: CreatePassword,
  },
  {
    header: "PERSONAL INFORMATION",
    stepKey: Steps.personalInfo,
    component: PersonalInfo,
  },
  {
    header: "EMPLOYMENT DETAILS",
    stepKey: Steps.empInfo,
    component: EmploymentInfo,
  },
  {
    header: "UPLOAD DOCUMENTS",
    stepKey: Steps.uploadDoc,
    component: UploadDocs,
  },
  {
    header: "COMPLETE",
    stepKey: Steps.complete,
    component: Complete,
  },
];

const Signup = () => {
  const [activeStep, setActiveStep] = useState(Steps.createPassword);
  const [completedSteps, setCompletedSteps] = useState([]);

  return (
    <div className="wrapper">
      <Stepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        completedSteps={completedSteps}
        setCompletedSteps={setCompletedSteps}
        stepperLogo={LogoImg}
      />
    </div>
  );
};

export default Signup;
