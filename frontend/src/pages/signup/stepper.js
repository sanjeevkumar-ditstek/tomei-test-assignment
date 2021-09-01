import React from "react";
import LogoImg from "../../assets/images/Logo.png";
import "./stepper.scss";
import { show } from "react-notification-system-redux";
import { useDispatch } from "react-redux";

const Step = ({
  render,
  header,
  stepKey,
  stepNumber,
  activeStep,
  setActiveStep,
}) => {
  const dispatch = useDispatch();
  const onStepClick = () => {
    if (stepNumber > activeStep.stepNo) {
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
        })}
      </div>
    </>
  );
};

const Stepper = ({ steps, activeStep, setActiveStep }) => {
  return (
    <div className="stepper">
      <div className="stepperLogo">
        <img src={LogoImg} />
      </div>
      <div className="stepperHead">
        {steps.map((item, i) => {
          return (
            <span key={item.stepKey.stepNo}>
              <Step
                activeStep={activeStep}
                stepKey={item.stepKey}
                setActiveStep={setActiveStep}
                stepNumber={i + 1}
                header={item.header}
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
