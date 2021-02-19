import React, { Component } from "react";
import * as s from "./FeedbackOptions.module.css";

class FeedbackOptions extends Component {
  render() {
    const { onGood, onNeutral, onBad } = this.props.onLeaveFeedback;

    return (
      <div>
        <h1>Please leave feedback</h1>
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
  }
}

export default FeedbackOptions;
