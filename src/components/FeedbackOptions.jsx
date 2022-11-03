import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(btn => (
    <button
      className={css.btn}
      key={btn}
      type="button"
      onClick={() => {
        onLeaveFeedback(btn);
      }}
    >
      {btn}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};
