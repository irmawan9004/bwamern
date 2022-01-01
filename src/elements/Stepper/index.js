import React, { useState } from "react";
import propTypes from "prop-types";
export default function Stepper(props) {
  const { steps, initialStep } = props;
  const stepsKey = Object.keys(steps);

  const [CurrentStep, setCurrentStep] = useState(
    stepsKey.indexOf(initialStep) > -1 ? initialStep : stepsKey[0]
  );
  const totalStep = stepsKey.length;
  const indexStep = stepsKey.indexOf(CurrentStep);

  function prevSteps() {
    if (+indexStep < totalStep) setCurrentStep(stepsKey[indexStep + 1]);
  }
  function nextSteps() {
    if (+indexStep < totalStep) setCurrentStep(stepsKey[indexStep + 1]);
  }
  return <>{props.children(prevSteps, nextSteps, CurrentStep, steps)}</>;
}

Stepper.propTypes = {
  data: propTypes.object.isRequired,
  initialStep: propTypes.string,
};
