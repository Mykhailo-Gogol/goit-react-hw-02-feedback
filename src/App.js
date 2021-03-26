import { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification/";

// const localStorage = window.localStorage;

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  // const getLSItem = (name) => Number(localStorage.getItem(name));

  // const handleSetToLocalStorage = (name, value) => {
  //   localStorage.setItem(name, value);
  // };

  const handleChange = (name) => {
    if (name === "good") {
      setGood(good + 1);
    }
    if (name === "bad") {
      setBad(bad + 1);
    }
    if (name === "neutral") {
      setNeutral(neutral + 1);
    }
  };

  const total = good + bad + neutral;

  return (
    <div className="container">
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, bad, neutral }}
          onLeaveFeedback={{
            onGood: () => handleChange("good"),
            onNeutral: () => handleChange("neutral"),
            onBad: () => handleChange("bad"),
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
};

export default App;
