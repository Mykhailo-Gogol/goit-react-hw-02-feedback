import React, { Component } from "react";

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    const positiveFeedbacks = `${positivePercentage.toFixed(0)} %`;

    return (
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {good && positiveFeedbacks}</p>
      </div>
    );
  }
}

export default Statistics;
