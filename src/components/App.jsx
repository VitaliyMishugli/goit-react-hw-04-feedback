// import React from "react";
import {useState} from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalVotes = good + neutral + bad;
  let isOptionChosen = (good !== 0 || neutral !== 0 || bad !== 0);

  const onLeaveFeedback = (label) => {
    if (label === 'Good') {
      setGood(prevState => prevState + 1)
    }
    if (label === 'Neutral') {
      setNeutral(prevState => prevState + 1)
    }
    if (label === 'Bad') {
      setBad(prevState => prevState + 1)
    }
  }

  const countPositiveFeedbackPercentage = (total) => {
    if (good === 0 && total === 0) {
      return 0;
    }
    else {
      return Math.round((good * 100) / total);
    }
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }
  return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={onLeaveFeedback} countTotalFeedback={countTotalFeedback} />

          {isOptionChosen
            ? <Statistics good={good} neutral={neutral} bad={bad} total={totalVotes} positivePercentage={countPositiveFeedbackPercentage} />
            : <Notification message="There is no feedback" />
          }
        </Section>
      </>
    );
}

// ========== Class component =========
// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }

//   onLeaveFeedback = (label) => {
//     if (label === 'Good') {
//       this.setState((prevState) => {
//         // console.log(prevState);
//         return {
//           good: prevState.good + 1
//         };
//       })
//     }
//     if (label === 'Neutral') {
//       this.setState((prevState) => {
//         return {
//           neutral: prevState.neutral + 1
//         };
//       })
//     }
//     if (label === 'Bad') {
//       this.setState((prevState) => {
//         return {
//           bad: prevState.bad + 1
//         };
//       })
//     }
//   }

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   }

//   countPositiveFeedbackPercentage = (total) => {
//     if (this.state.good === 0 && total === 0) {
//       return 0;
//     }
//     else {
//       return Math.round((this.state.good * 100) / total);
//     }
//   }

//   render() {
//     const totalVotes = this.countTotalFeedback();
//     let isOptionChosen = (this.state.good !== 0 || this.state.neutral !== 0 || this.state.bad !== 0);
//     return (
//       <>
//         <Section title='Please leave feedback'>
//           <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.onLeaveFeedback} countTotalFeedback={this.countTotalFeedback} />

//           {isOptionChosen
//             ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={totalVotes} positivePercentage={this.countPositiveFeedbackPercentage} />
//             : <Notification message="There is no feedback" />
//           }
//         </Section>
//       </>
//     );
//   }
// };
// =========================


