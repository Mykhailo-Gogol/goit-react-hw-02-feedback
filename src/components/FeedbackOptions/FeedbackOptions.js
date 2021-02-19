import React, { Component } from "react";

class FeedbackOptions extends Component {
  render() {
    const { onGood, onNeutral, onBad } = this.props.onLeaveFeedback;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" onClick={onGood}>
          good
        </button>
        <button type="button" onClick={onNeutral}>
          neutral
        </button>
        <button type="button" onClick={onBad}>
          bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
