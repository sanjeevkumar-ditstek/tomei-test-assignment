import React from "react";
import { show } from "react-notification-system-redux";
import { useDispatch } from "react-redux";
import "./stepper.scss";

const Step = ({
  render,
  header,
  stepKey,
  stepNumber,
  activeStep,
  setActiveStep,
  completedSteps,
  setCompletedSteps,
}) => {
  const dispatch = useDispatch();
  const onStepClick = () => {

    if (stepNumber > activeStep.stepNo&&(!completedSteps.includes(activeStep))) {
      dispatch(
        show(
          {
            title: "Alert",
            message: "Please submit current step before moving to next step.",
            position: "br",
            autoDismiss: 4,
          },
          "info"
        )
      );
    } else {
      setActiveStep(stepKey);
    }
  };
  return (
    <>
      <div className={activeStep === stepKey ? "step active" : "step"}>
        <div className="stepTitle">
          <div onClick={() => onStepClick()} className="circle">
            {stepNumber}
          </div>
          <div className="desc">
            <div className="count">Step {stepNumber} :</div>
            <div className="title">{header}</div>
          </div>
        </div>
        {render({
          activeStep,
          setActiveStep,
          active: activeStep === stepKey,
          stepKey,
          completedSteps,
          setCompletedSteps,
        })}
      </div>
    </>
  );
};

const Stepper = ({
  steps,
  activeStep,
  setActiveStep,
  completedSteps,
  setCompletedSteps,
  stepperLogo
}) => {
  return (
    <div className="stepper">
      {stepperLogo&&<div className="stepperLogo">
        <img alt='logo' src={stepperLogo} />
      </div>}
      <div className="stepperHead">
        {steps.map((item, i) => {
          return (
            <span className="span" key={item.stepKey.stepNo}>
              <Step
                activeStep={activeStep}
                stepKey={item.stepKey}
                setActiveStep={setActiveStep}
                stepNumber={i + 1}
                header={item.header}
                completedSteps={completedSteps}
                setCompletedSteps={setCompletedSteps}
                render={item?.component}
              />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
