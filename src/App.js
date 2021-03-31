import "./App.css";
import { useState } from "react";

import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification/";

const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);


  const handleChange = (name) => {
    if (name === "good") {
      setGood((prevState) => prevState + 1);
    }
    if (name === "bad") {
      setBad((prevState) => prevState + 1);
    }
    if (name === "neutral") {
      setNeutral((prevState) => prevState + 1);
    }
  };

  const total = good + bad + neutral;

  const positivePercentage = (good / total) * 100

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
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>

    </div>
  );
};

export default App;
