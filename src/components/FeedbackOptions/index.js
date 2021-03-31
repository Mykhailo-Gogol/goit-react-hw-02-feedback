import PropTypes from "prop-types";
import Button from "../Button";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  const { onGood, onNeutral, onBad } = onLeaveFeedback;

  return (
    <div>
      <Button handler={onGood} buttonTitle="good" />
      <Button handler={onBad} buttonTitle="bad" />
      <Button handler={onNeutral} buttonTitle="neutral" />
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.shape({
    onGood: PropTypes.func,
    onNeutral: PropTypes.func,
    onBad: PropTypes.func,
  })
}

export default FeedbackOptions;
