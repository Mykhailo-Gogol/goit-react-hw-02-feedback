import React, { Component } from "react";
import "./App.css";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveGoodFeedback = () => {
    const { good } = this.state;
    this.setState({ good: good + 1 });
  };
  onLeaveNeutralFeedback = () => {
    const { neutral } = this.state;
    this.setState({ neutral: neutral + 1 });
  };
  onLeaveBadFeedback = () => {
    const { bad } = this.state;
    this.setState({ bad: bad + 1 });
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div className="App">
        <FeedbackOptions
          options={{ good, bad, neutral }}
          onLeaveFeedback={{
            onGood: this.onLeaveGoodFeedback,
            onNeutral: this.onLeaveNeutralFeedback,
            onBad: this.onLeaveBadFeedback,
          }}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={good + bad + neutral}
          positivePercentage={(good / (good + bad + neutral)) * 100}
        />
      </div>
    );
  }
}

export default App;
