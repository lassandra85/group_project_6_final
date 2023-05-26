import css from './ErrorMessage.module.css'

const ErrorMessage = ({ message }) => {
  return <p className={css.ErrorText}>{message}</p>;
};

export default ErrorMessage;
