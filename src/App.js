import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";

import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Section from "./components/Section";
import Notification from "./components/Notification";
import "./App.css";

const App = (totalFeedback) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const percentageOfGoodFeedb = Math.ceil(
      (good / (good + neutral + bad)) * 100
    );
    return percentageOfGoodFeedb || 0;
  };

  const handleGoodBtn = () => {
    setGood((prev) => prev + 1);
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  };

  const handleNeutralBtn = () => {
    setNeutral((prev) => prev + 1);
    countTotalFeedback();
  };

  const handleBadBtn = () => {
    setBad((prev) => prev + 1);
    countTotalFeedback();
  };

  // render (totalFeedback) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Please leave feedback</h1>
      </header>

      <Section title="">
        <FeedbackOptions
          onHandleGoodBtn={handleGoodBtn}
          onHandleNeutralBtn={handleNeutralBtn}
          onHandleBadBtn={handleBadBtn}
        />
      </Section>
      {totalFeedback !== 0 ? (
        <Section title="Statistics">
          <Statistics
            Good={good}
            Neutral={neutral}
            Bad={bad}
            Total={countTotalFeedback()}
            Positive={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
};

App.defaultProps = {
  totalFeedback: 0,
  percentageOfGoodFeedb: 0,
};
App.propTypes = {
  totalFeedback: PropTypes.number,
  percentageOfGoodFeedb: PropTypes.number,
};

export default App;
