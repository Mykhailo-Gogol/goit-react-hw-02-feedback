import React from "react";
import PropTypes from "prop-types";
import * as s from "./FeedbackOptions.module.css";

const FeedbackOptions = (props) => {
  const { onGood, onNeutral, onBad } = props.onLeaveFeedback;

  return (
    <div>
      <button onClick={onGood} className={s.button} type="button">
        good
      </button>
      <button onClick={onNeutral} className={s.button} type="button">
        neutral
      </button>
      <button onClick={onBad} className={s.button} type="button">
        bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.shape({
    onBad: PropTypes.func,
    onGood: PropTypes.func,
    onNeutral: PropTypes.func,
  }).isRequired,
  options: PropTypes.object.isRequired,
};

export default FeedbackOptions;
