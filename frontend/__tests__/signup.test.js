import React from 'react';
import {  shallow, mount, render  } from 'enzyme';
import SignUp from '../src/pages/signup/index';
import Stepper from '../src/pages/signup/stepper'

describe('Sign Up Testing', () => {
    let wrapper 
    beforeEach(() => {
        wrapper = shallow( <SignUp /> );
    });

    it('Steper is Present', () => {
        expect(wrapper.find('Stepper').length).toBe(1);
    });

    it('Steper with props', () => {
        let props = {steps: [], activeStep: "", setActiveStep: () => {}}
        let newWraper = mount(<Stepper  
            steps={[]}
            activeStep={""}
            setActiveStep={()  => {}}/>
        )
        expect(newWraper.props().steps).toEqual(props.steps);
    });
})