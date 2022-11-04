import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import React from 'react';
import {useState} from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateState = value => {
    setFeedback(prevFeedback => {
      return {
        ...prevFeedback, [value]: prevFeedback[value] + 1, 
      };
    });
  };
  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const result = countTotalFeedback()
      ? Math.round((feedback.good / countTotalFeedback()) * 100)
      : 0;
    return result;
  };

  return (
    <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(feedback)}
            onLeaveFeedback={updateState}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() ? (
            <Statistics
              good={feedback.good}
              neutral={feedback.neutral}
              bad={feedback.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
  );
};

