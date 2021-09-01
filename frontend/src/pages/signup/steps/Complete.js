import React from "react";
import { Steps } from "../index";

const Complete = ({ activeStep, setActiveStep, active }) => {
  return (
    <>
      {active && (
        <div className="stepperCard">
          <h2 className="stepperHeader">
            Your account is successfully created.
          </h2>
          <div className="stepperBody">
            <p className="info">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea ullam
              doloremque dolorum atque voluptatem libero facere rem aliquam
              numquam deserunt, provident veniam delectus illo dignissimos
              reprehenderit necessitatibus! Laborum, ducimus blanditiis.
            </p>
          </div>
          <div className="stepperFooter">
            <button
              className="btn"
              onClick={() => setActiveStep(Steps.createPassword)}
            >
              Home
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Complete;
