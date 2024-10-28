import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
import PropTypes from 'prop-types';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Funcție pentru gestionarea feedback-ului
  const handleFeedback = (feedbackType) => {
    if (feedbackType === 'good') {
      setGood(prev => prev + 1);
    } else if (feedbackType === 'neutral') {
      setNeutral(prev => prev + 1);
    } else if (feedbackType === 'bad') {
      setBad(prev => prev + 1);
    }
  };

  // Calculează totalul feedback-ului
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  // Calculează procentajul feedback-ului pozitiv
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div style={{ margin: '50px' }}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
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
}

App.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default App;