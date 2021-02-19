import React, { Component } from "react";

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    console.log(positivePercentage);

    return (
      <div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {good && positivePercentage.toFixed(2)}</p>
      </div>
    );
  }
}

export default Statistics;
