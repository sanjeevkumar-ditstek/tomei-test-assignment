import React, { useRef, useState } from "react";
import Profile from "../../../assets/images/Avatar.png";
import ArrowRight from "../../../assets/images/arrow-right.png";
import { Steps } from "../index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../../../shared/components/input/Input";
import {apiCall} from '../../../store/actions/api.actions'
import { useDispatch,useSelector } from "react-redux";

const schemaObj = {
  name: yup
    .string()
    .required("This field is required")
    .min(2, "Too Short!")
    .max(50, "Too Long!"),
  email: yup.string().required("This field is required").email("Invalid email"),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Too Short!")
    .max(24, "Too Long!")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])/,
      "Password must include at-least 1 digit,1 uppercase alphabet & 1 special character."
    ),
  confirmPassword: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
};




const schema = yup.object().shape(schemaObj);

const CreatePassword = ({ activeStep, setActiveStep, active,completedSteps,
  setCompletedSteps, }) => {
  const loading = useSelector(state => state.api.isApiLoading)
  const [{ alt, src }, setImg] = useState({
    src: Profile,
    alt: "Profile",
  });

  const [image, setImage] = useState(null);
  const uploadInputRef = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
const dispatch = useDispatch()
  const onSubmit = (data) => {
    const body = {
      name: data.name,
      password: data.password,
      email: data.email,
      ...(image ? {image}:{})
    };
    console.log(body);

    const getFormData = object => Object.keys(object).reduce((formData, key) => {
      formData.append(key, object[key]);
      return formData;
  }, new FormData());



    const formData = getFormData(body);

    if(completedSteps.includes(Steps.createPassword)) {
      setActiveStep(Steps.personalInfo);
    }
    else{
      dispatch(apiCall({urls:["CREATE_ACCOUNT"],method:"POST",data:formData,onSuccess:(resp)=>{
        console.log(resp)
        setCompletedSteps(completed=>([...completed,activeStep]))
        setActiveStep(Steps.personalInfo);
      },showNotification:true}))
    }
  };

  const handleImg = (e) => {
    if (e.target.files[0]) {
      setImg({
        src: URL.createObjectURL(e.target.files[0]),
        alt: e.target.files[0].name,
      });
      setImage(e.target.files[0]);
      e.target.value=''
    }
  };
  return (
    <form
      style={{ display: active ? "block" : "none" }}
      className="stepperCard"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="stepperHeader">Create your account</h2>
      <div className="stepperBody">
        <p className="info">
          Because there will be documents that you need to prepare to apply for
          the loan, let's start off by creating a password so that you can login
          to your account once you have these document ready.
        </p>
        <div className="form">
          <div className="profile">
            <div className="profileImg">
              <input
                type="file"
                accept=".png, .jpg, .jpeg"
                onChange={handleImg}
                ref={uploadInputRef}
              />
              <img src={src} alt={alt} />
            </div>
            {src === Profile ? (
              <p
                onClick={() => {
                  uploadInputRef?.current.click();
                }}
              >
                Upload
              </p>
            ) : (
              <p
                onClick={() => {
                  setImg({
                    src: Profile,
                    alt: "Upload an Image",
                  });
                  setImage();
                }}
              >
           
                Remove
              </p>
            )}
          </div>
          <div className="formInputs">
            <div className="formInner">
              <Input
                text="name"
                error={errors.name?.message}
                {...register("name")}
              />
              <Input
                text="email"
                error={errors.email?.message}
                {...register("email")}
              />
              <Input
                text="password"
                type="password"
                {...register("password")}
                error={errors.password?.message}
              />
              <Input
                text="confirm password"
                type="password"
                {...register("confirmPassword")}
                error={errors.confirmPassword?.message}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="stepperFooter">
        <button className="btn" type="submit" disabled={loading}>
          {loading ? (
            <span className="loader"> </span>
          ) : (
            <>
              Save & Next <img alt='' src={ArrowRight} />{" "}
            </>
          )}
        </button>
      </div>
    </form>
  );
};

export default CreatePassword;
