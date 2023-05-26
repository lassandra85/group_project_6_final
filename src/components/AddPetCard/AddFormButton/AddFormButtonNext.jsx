// import PropTypes from 'prop-types';
import css from './AddFormButton.module.css';

const AddFormButtonNext = ({
  text,
  icon,
  clickHandler,
  filled,
  short,
  type,
  isDisabled,
}) => {
  return (
    <button className={css.buttonNext}
      type={type}
      onClick={clickHandler && (() => clickHandler(false))}
      filled={filled}
      short={short}
      disabled={isDisabled}
    >
      {text}
      {icon}
    </button>
  );
};

// AddFormButtonNext.propTypes = {
//   text: PropTypes.string.isRequired,
//   icon: PropTypes.node,
//   clickHandler: PropTypes.func,
//   isDisabled: PropTypes.bool.isRequired,
// };

export default AddFormButtonNext;
