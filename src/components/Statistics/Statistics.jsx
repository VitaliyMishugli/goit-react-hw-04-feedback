import PropTypes from 'prop-types';

export const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {

  return (
    <>
      <h2>Statistics</h2>
      <h3>Good: { good}</h3>
      <h3>Neutral: {neutral }</h3>
      <h3>Bad: { bad}</h3>
      <h3>Total: { total}</h3>
      <h3>Positive feedback: {positivePercentage(total).toFixed(0)} %</h3>
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
}