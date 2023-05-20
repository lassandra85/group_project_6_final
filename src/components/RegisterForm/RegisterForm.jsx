import css from '../RegisterForm/RegisterForm.module.css';
import { NavLink } from 'react-router-dom';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const RegisterForm = () => {
    const dispatch = useDispatch();

  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  const [isActive2, setActive2] = useState(false);
  const handleClick2 = () => {
    setActive2(!isActive2);
  };

  const [pass, setPass] = useState(true);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;

    if (form.elements.password.value === form.elements.confirmPassword.value) {
      setPass(pass);
      dispatch(
        register({
          email: form.elements.email.value,
          password: form.elements.password.value,          
        })
      );

      form.reset();
    } else {
      setPass(!pass);
    }
  };

  return (
    <div className={css.container}>
      <h2 className={css.header}>Registration</h2>

      <form className={css.formRegister} onSubmit={handleSubmit}>
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
        <div className={css.passwordCont}>
          <label>
            <input
              placeholder="Confirm password"
              type={isActive2 ? 'text' : 'password'}
              name="confirmPassword"
              className={css.inputRegister}
            ></input>
            <button
              type="button"
              className={css.eyeBttn}
              onClick={handleClick2}
            >
              {isActive2 ? (
                <BsEye size={24} color="rgba(84, 173, 255, 1)" />
              ) : (
                <BsEyeSlash size={24} color="rgba(84, 173, 255, 1)" />
              )}
            </button>
          </label>
          {pass ? '' : <p className={css.errorRassword}>Password mismatch</p>}
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
}

export default RegisterForm;