import React from "react";
// import PropTypes from "prop-types";
import Button from "../Button";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const { onGood, onNeutral, onBad } = onLeaveFeedback;

  return (
    <div>
      <Button func={onGood} buttonTitle="good" />
      <Button func={onBad} buttonTitle="bad" />
      <Button func={onNeutral} buttonTitle="neutral" />
    </div>
  );
};

export default FeedbackOptions;
