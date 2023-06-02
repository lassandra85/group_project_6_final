import css from '../LoginForm/LoginForm.module.css';
import { BsEyeSlash, BsEye } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { loginValidation } from '../../helpers/loginDataValidation';

const LoginForm = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  // let [pass, setPass] = useState(true);
  // let [em, setEm] = useState(true);
  // let [err, setErr] = useState(true);
  let [err2, setErr2] = useState(true);
  const [loading, setLoading] = useState(false);

  const onSubmit = async values => {
    // evt.preventDefault();
    // const form = evt.currentTarget;
    // const emailField = form.elements.email.value;
    // const passwordField = form.elements.password.value;

    // const credentials = {
    //   email: emailField,
    //   password: passwordField,
    // };
    if (loading) {
      return;
    }

    setLoading(true);
    try {
      await dispatch(
        logIn({ email: values.email, password: values.password })
      ).then(data => {
        if (data.error) {
          setErr2(false);
        } else {
          setErr2(true);
          //navigate('/user');
        }
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }

    //  else if (!emailField && passwordField) {
    //   setEm((em = false));
    //   setErr((err = true));
    //   setPass((pass = true));
    // } else if (!emailField && !passwordField) {
    //   setErr((err = false));
    //   setPass((pass = true));
    //   setEm((em = true));
    // } else if (emailField && !passwordField) {
    //   setPass((pass = false));
    //   setEm((em = true));
    //   setErr((err = true));
    // }
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidation,
    onSubmit,
  });

  return (
    <div className={css.container}>
      <h2 className={css.header}>Login</h2>

      <form className={css.formRegister} onSubmit={handleSubmit} noValidate autoComplete='off'>
        <div className={css.passwordCont}>
          <label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              id="email"
              className={
                errors.email && touched.email
                  ? css.inputRegisterError
                  : css.inputRegister
              }
              value={values.email}
              onChange={handleChange}
            ></input>
          </label>
          {errors.email && touched.email && (
            <p className={css.errorRassword}>{errors.email}</p>
          )}
        </div>
        <div className={css.passwordCont}>
          <label>
            <input
              placeholder="Password"
              type={isActive ? 'text' : 'password'}
              name="password"
              className={
                errors.password && touched.password
                  ? css.inputRegisterError
                  : css.inputRegister
              }
              value={values.password}
              onChange={handleChange}
            ></input>
            <button type="button" className={css.eyeBttn} onClick={handleClick}>
              {isActive ? (
                <BsEye size={24} color="rgba(84, 173, 255, 1)" />
              ) : (
                <BsEyeSlash size={24} color="rgba(84, 173, 255, 1)" />
              )}
              {/* {!isActive && values.password.length > 5 && err2 && (
                <BsCheck2 size={24} color="#00C3AD" />
              )} */}
            </button>
          </label>
          {/* {pass ? '' : <p className={css.errorRassword}>Enter password</p>}
          {em ? '' : <p className={css.errorRassword}>Enter email</p>}
          {err ? '' : <p className={css.errorRassword}>Enter data</p>} */}
          {errors.password &&
            touched.password 
             && (
              <p className={css.errorRassword}>{errors.password}</p>
            )}
          {/* {values.password.length > 5 && err2 && (
            <p className={css.inputGood}>Password is secure</p>
          )} */}
          {err2 || errors.password || errors.email ? (
            ''
          ) : (
            <p className={css.errorRassword}>Email or password incorrect</p>
          )}
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
