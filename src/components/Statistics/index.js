import PropTypes from "prop-types";

const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;
  const positiveFeedbacks = `${positivePercentage.toFixed(0)} %`;

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {good && positiveFeedbacks}</p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
