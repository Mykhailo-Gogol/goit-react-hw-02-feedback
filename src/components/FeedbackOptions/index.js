import React from "react";
// import PropTypes from "prop-types";
import Button from "../Button";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const { onGood, onNeutral, onBad } = onLeaveFeedback;

  return (
    <div>
      <Button func={onGood} />
      <Button func={onBad} />
      <Button func={onNeutral} />
    </div>
  );
};

export default FeedbackOptions;
