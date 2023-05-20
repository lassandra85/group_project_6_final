import css from '../LoginForm/LoginForm.module.css';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const LoginForm = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className={css.container}>
      <h2 className={css.header}>Login</h2>

      <form className={css.formRegister}>
        <label>
          <input
            placeholder="Email"
            type="email"
            name="email"
            className={css.inputRegister}
          ></input>
        </label>
        <div className={css.passwordCont}>
          <label>
            <input
              placeholder="Password"
              type={isActive ? 'text' : 'password'}
              name="password"
              className={css.inputRegister}
            ></input>
            <button type="button" className={css.eyeBttn} onClick={handleClick}>
              {isActive ? (
                <BsEye size={24} color="rgba(84, 173, 255, 1)" />
              ) : (
                <BsEyeSlash size={24} color="rgba(84, 173, 255, 1)" />
              )}
            </button>
          </label>
        </div>
       
        <button type="submit" className={css.bttnRegister}>
          Login
        </button>
      </form>
      <div className={css.containerLog}>
        <p className={css.text}>Don't have an account?</p>&nbsp;
        <NavLink className={css.link} to="/register">
          Register
        </NavLink>
      </div>
    </div>
  );
};

export default LoginForm;
