import React from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
// import PropTypes from "prop-types";

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (label) => {
    if (label === 'Good') {
      this.setState((prevState) => {
        // console.log(prevState);
        return {
          good: prevState.good + 1
        };
      })
    }
    if (label === 'Neutral') {
      this.setState((prevState) => {
        return {
          neutral: prevState.neutral + 1
        };
      })
    }
    if (label === 'Bad') {
      this.setState((prevState) => {
        return {
          bad: prevState.bad + 1
        };
      })
    }
  }

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage = (total) => {
    if (this.state.good === 0 && total === 0) {
      return 0;
    }
    else {
      return Math.round((this.state.good * 100) / total);
    }
  }

  render() {
    const totalVotes = this.countTotalFeedback();
    let isOptionChosen = (this.state.good !== 0 || this.state.neutral !== 0 || this.state.bad !== 0);
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.onLeaveFeedback} countTotalFeedback={this.countTotalFeedback} />

          {isOptionChosen
            ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={totalVotes} positivePercentage={this.countPositiveFeedbackPercentage} />
            : <Notification message="There is no feedback" />
          }
        </Section>
      </>
    );
  }
};



