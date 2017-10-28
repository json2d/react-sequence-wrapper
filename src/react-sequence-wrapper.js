import React, { Component } from 'react';

export default ({ steps }) => WrappedComponent => {
  //TODO: immute decorator options

  class WrapperComponent extends Component {
    constructor(props) {
      super(props);
      this.state = { currentStepIndex: 0 };
    }

    nextStep = () => {
      if (this.state.currentStepIndex === steps.length - 1) {
        throw new Error('no next step!');
      }

      this.setState(prevState => ({
        currentStepIndex: prevState.currentStepIndex + 1
      }));
    };

    prevStep = () => {
      if (this.state.currentStepIndex === 0) {
        throw new Error('no prev step!');
      }

      this.setState(prevState => ({
        currentStepIndex: prevState.currentStepIndex - 1
      }));
    };

    setStepIndex = index => {
      this.setState({ currentStepIndex: index });
    };

    setStep = step => {
      this.setState({ currentStepIndex: steps.indexOf(step) });
    };

    render() {
      const { currentStepIndex } = this.state;
      const bound = {
        steps,
        currentStepIndex,
        currentStep: steps[currentStepIndex],
        nextStep: this.nextStep,
        prevStep: this.prevStep,
        setStepIndex: this.setStepIndex,
        setStep: this.setStep,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1
      };

      return <WrappedComponent {...bound} {...this.props} />;
    }
  }

  return WrapperComponent;
};
