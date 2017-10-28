# react-sequence-wrapper

a higher order component decorator providing state management for components that use a sequence of steps, like wizards and other multiple-step user interfaces.

[![npm](https://img.shields.io/npm/v/react-sequence-wrapper.svg)](https://www.npmjs.com/package/react-sequence-wrapper)

## Installation

```sh
npm install react-sequence-wrapper --save-dev
```

## Usage

Here's an example of using `sequence` decorator with the `steps` option to wrap a component and provide it with `props` to implement a basic wizard with forward and backwards navigation:

[![Edit react-sequence-wrapper@0.1.1](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/6jqrp3o5wk?module=%2FWizard.js)

```javascript
import React, { Component } from "react";
import { Label, Button } from "react-bootstrap";
import sequence from "react-sequence-wrapper";

@sequence({
  steps: ["Greet", "Compliment", "Leave"]
})
export default class WizardForm extends Component {
  render() {
    const stepComponents = [
      <div>hello world!</div>,
      <div>nice shirt!</div>,
      <div>goodbye!</div>
    ];

    const {
      currentStepIndex,
      currentStep,
      nextStep,
      prevStep,
      setStepIndex,
      setStep,
      isFirstStep,
      isLastStep,
      steps
    } = this.props; //all from @sequence
    return (
      <div>
        <div id="header">
          <h2>
            <Label bsStyle="success">
              {currentStepIndex + 1}. {steps[currentStepIndex]}
            </Label>
          </h2>
        </div>

        <div id="step">
          {stepComponents[currentStepIndex]}
        </div>

        <div id="basic-navigation">
          <Button onClick={prevStep} disabled={isFirstStep}>
            Back
          </Button>
          <Button bsStyle="primary" onClick={nextStep} disabled={isLastStep}>
            Next
          </Button>
        </div>

        <div id="steps-navigation">
          <h5>Steps Navigator</h5>

          {steps.map((step, index) => (
            <Button
              onClick={() => setStepIndex(index)}
              disabled={currentStepIndex == index}
              bsStyle={currentStepIndex == index ? "success" : "default"}
            >
              {index + 1}.{step}
            </Button>
          ))}
        </div>
      </div>
    );
  }
}
```



## Dev Dependencies

- [babel-cli](https://github.com/babel/babel/tree/master/packages): Babel command line.
- [babel-core](https://github.com/babel/babel/tree/master/packages): Babel compiler core.
- [babel-eslint](https://github.com/babel/babel-eslint): Custom parser for ESLint
- [babel-preset-es2015](https://github.com/babel/babel/tree/master/packages): Babel preset for all es2015 plugins.
- [babel-preset-react](https://github.com/babel/babel/tree/master/packages): Babel preset for all React plugins.
- [babel-preset-stage-0](https://github.com/babel/babel/tree/master/packages): Babel preset for stage 0 plugins
- [babel-register](https://github.com/babel/babel/tree/master/packages): babel require hook
- [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript.
- [eslint-config-rackt](https://github.com/rackt/eslint-config-rackt): Shareable eslint config for rackt repos
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react): React specific linting rules for ESLint
- [react](https://github.com/facebook/react): React is a JavaScript library for building user interfaces.
- [react-dom](https://github.com/facebook/react): React package for working with the DOM.
- [rimraf](https://github.com/isaacs/rimraf): A deep deletion module for node (like `rm -rf`)


## License

MIT
