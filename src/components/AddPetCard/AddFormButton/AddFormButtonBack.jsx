import PropTypes from 'prop-types';
import css from './AddFormButton.module.css'
import { NavLink } from "react-router-dom";
import { ArrowLeftIcon } from '../utils/icons';

const AddFormButtonBack = ({ text, clickHandler, type, isLink, path }) => {
  if (isLink) {
    return (
      <NavLink className={css.buttonBack} onClick={clickHandler} type={type} to={path}>
        <ArrowLeftIcon />
        {text}
      </NavLink>
    );
  }

  return (
    <button className={css.buttonBack} onClick={clickHandler} type={type}>
      <ArrowLeftIcon />
      {text}
    </button>
  );
};

AddFormButtonBack.propTypes = {
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  isLink: PropTypes.bool.isRequired,
  type: PropTypes.string,
  path: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
  ]),
};

export default AddFormButtonBack;
