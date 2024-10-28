import React, { useState } from 'react';
import styles from './feedback.module.css';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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

  //const total = countTotalFeedback();
  //const positivePercentage = countPositiveFeedbackPercentage();

  return (
        <div>
            <h1>Please leave feedback</h1>
            <button className= {styles.button} onClick={() =>
                handleFeedback('good')}>Good</button>
            <button className= {styles.button} onClick={() =>
                handleFeedback('neutral')}>Neutral</button>
            <button className= {styles.button} onClick={() =>
                handleFeedback('bad')}>Bad</button>
            <h2>Statistics</h2>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {countTotalFeedback()}</p>
            <p>Positive Feedback: {countPositiveFeedbackPercentage()}%</p>
        </div>
    )
}

export default Feedback;