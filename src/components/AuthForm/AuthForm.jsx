import css from '../AuthForm/AuthForm.module.css';
import { NavLink } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { useState } from 'react';

const AuthForm = () => {
  
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  const [isActive2, setActive2] = useState(false);
  const handleClick2 = () => {
    setActive2(!isActive2);
  }


  
  return (
    <div className={css.container}>
      <h2 className={css.header}>Registration</h2>

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
              type="password"
              name="password"
              className={css.inputRegister}
            ></input>
            <button type="button" className={css.eyeBttn} onClick={handleClick}>
              {isActive ? <BsEye size={24} color="rgba(84, 173, 255, 1)" />
              : <BsEyeSlash size={24} color="rgba(84, 173, 255, 1)"/>}
              
            </button>
          </label>
        </div>
        <div className={css.passwordCont}>
          <label>
            <input
              placeholder="Confirm password"
              type="password"
              name="confirm password"
              className={css.inputRegister}
            ></input>
            <button type="button" className={css.eyeBttn} onClick={handleClick2}>
              {isActive2 ? <BsEye size={24} color="rgba(84, 173, 255, 1)" />
              : <BsEyeSlash size={24} color="rgba(84, 173, 255, 1)"/>}
            </button>
          </label>
        </div>
        <button type="submit" className={css.bttnRegister}>
          Registration
        </button>
      </form>
      <div className={css.containerLog}>
        <p className={css.text}>Already have an account?</p>&nbsp;
        <NavLink className={css.link} to="/login">
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default AuthForm;
