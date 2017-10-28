# react-sequence-wrapper

a higher order component decorator providing state management for components that use a sequence of steps, like wizards and other multiple-step user interfaces.

[![npm](https://img.shields.io/npm/v/react-sequence-wrapper.svg)](https://www.npmjs.com/package/react-sequence-wrapper)

## Installation

```sh
npm install react-sequence-wrapper --save-dev
```

## Usage

Here's an example of using `sequence` decorator with the `steps` option to wrap a component and provide it with `props` to implement a basic wizard with forward and backwards navigation.

```javascript
import React, { Component } from "react";
import { Label, Button } from "react-bootstrap";
import sequence from "./react-sequence-wrapper";

@sequence({
  steps: ["Greet", "Compliment", "Leave"]
})
export default class BasicWizard extends Component {

  render() {
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
    } = this.props; //all provided by @sequence

    const stepComponents = [
      <div>hello world!</div>,
      <div>nice shirt!</div>,
      <div>goodbye!</div>
    ];

    return (
      <div>
        <h2>
          <Label>
            {currentStepIndex + 1}. {currentStep}
          </Label>
        </h2>

        <div>
          {stepComponents[currentStepIndex]}

          <div id="navigation">
            <Button onClick={prevStep} disabled={isFirstStep}>
              Back
            </Button>
            <Button onClick={nextStep} disabled={isLastStep}>
              Next
            </Button>
          </div>
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
