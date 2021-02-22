import React, { PureComponent } from "react";
import "./App.css";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification/";

const localStorage = window.localStorage;

class App extends PureComponent {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  componentDidMount() {
    const { good, neutral, bad } = this.state;

    const goodLS = this.getLSItem("good");
    const neutralLS = this.getLSItem("neutral");
    const badLS = this.getLSItem("bad");

    if (goodLS && goodLS !== good) {
      this.setState({ good: goodLS });
    }
    if (neutralLS && neutralLS !== neutral) {
      this.setState({ neutral: neutralLS });
    }
    if (badLS && badLS !== bad) {
      this.setState({ bad: badLS });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("GOOD PREV", prevState.good, "GOOD CURRENT", this.state.good);
  }

  getLSItem = (name) => Number(localStorage.getItem(name));

  handleSetToLocalStorage = (name, value) => {
    localStorage.setItem(name, value);
  };

  handleChange = (name) => {
    const result = this.state[name] + 1;

    if (name === "good") {
      this.setState({ good: result });
    }
    if (name === "bad") {
      this.setState({ bad: result });
    }
    if (name === "neutral") {
      this.setState({ neutral: result });
    }

    this.handleSetToLocalStorage(`${name}`, result);
  };

  render() {
    const { good, bad, neutral } = this.state;
    const total = good + bad + neutral;

    return (
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{ good, bad, neutral }}
            onLeaveFeedback={{
              onGood: () => this.handleChange("good"),
              onNeutral: () => this.handleChange("neutral"),
              onBad: () => this.handleChange("bad"),
            }}
          />
        </Section>
        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={(good / Number(good + bad + neutral)) * 100}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
