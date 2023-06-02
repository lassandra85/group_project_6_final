import css from '../RegisterForm/RegisterForm.module.css';
import { NavLink } from 'react-router-dom';
import { BsEyeSlash, BsEye, BsCheck2 } from 'react-icons/bs';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { useFormik } from 'formik';
import { registerValidation } from '../../helpers/registerDataValidation';

const RegisterForm = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
  const [isActive2, setActive2] = useState(false);
  const handleClick2 = () => {
    setActive2(!isActive2);
  };

  const [loading, setLoading] = useState(false);

  // let [pass, setPass] = useState(true);
  // let [em, setEm] = useState(true);
  // let [err, setErr] = useState(true);
  let [dublicate, setDublicate] = useState(true);

  const onSubmit = async values => {
    //evt.preventDefault();
    // const form = evt.currentTarget;
    // const emailField = form.elements.email.value;
    // const passwordField = form.elements.password.value;
    // const confirmPasswordField = form.elements.confirmPassword.value;
    // const credentials = {
    //   email: emailField,
    //   password: passwordField,
    // };
    if (loading) {
      return;
    }

    // if (
    //   passwordField === confirmPasswordField &&
    //   emailField &&
    //   passwordField !== '' &&
    //   confirmPasswordField !== ''
    // ) {
    // setPass(pass);
    // setEm(em);
    // setErr(err);
    setLoading(true);
    try {
      const result = await dispatch(
        register({ email: values.email, password: values.password })
      );

      if (result.payload === 'Request failed with status code 409') {
        setDublicate(false);
      } else {
        setDublicate(true);
        //form.reset();
        //navigate('/user');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
    // } else if (
    //   !emailField &&
    //   confirmPasswordField === passwordField &&
    //   passwordField !== '' &&
    //   confirmPasswordField !== ''
    // ) {
    //   setEm((em = false));
    //   setErr((err = true));
    //   setPass((pass = true));
    // } else if (!emailField && !passwordField && !confirmPasswordField) {
    //   setErr((err = false));
    //   setPass((pass = true));
    //   setEm((em = true));
    // } else if (confirmPasswordField !== passwordField) {
    //   setPass((pass = false));
    //   setEm((em = true));
    //   setErr((err = true));
    // } else if (emailField && !passwordField) {
    //   setPass((pass = false));
    //   setEm((em = true));
    //   setErr((err = true));
  };

  const { values, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: registerValidation,
    onSubmit,
  });

  return (
    <div className={css.container}>
      <h2 className={css.header}>Registration</h2>

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
          {dublicate ? '' : <p className={css.errorRassword}>Email in use.</p>}
        </div>
        <div className={css.passwordCont}>
          <label>
            <input
              placeholder="Password"
              type={isActive ? 'text' : 'password'}
              name="password"
              id="password"
              className={
                errors.password && touched.password
                  ? css.inputRegisterError
                  : css.inputRegister
              }
              value={values.password}
              onChange={handleChange}
            ></input>
            <button type="button" className={css.eyeBttn} onClick={handleClick}>
              {isActive &&  values.password.length<6 &&
                (<BsEye size={24} color="rgba(84, 173, 255, 1)" />
              )}
                {!isActive &&  values.password.length<6 &&(
                <BsEyeSlash size={24} color="rgba(84, 173, 255, 1)" />
              )}
              {isActive &&  errors.password && values.password.length>5
                && (<BsEye size={24} color="rgba(84, 173, 255, 1)" />
              )}
              {!isActive && errors.password && values.password.length > 5
                && (
                <BsEyeSlash size={24} color="rgba(84, 173, 255, 1)" />
              )}
              
              
              {values.password.length > 5 &&                 
                !errors.password && <BsCheck2 size={24} color="#00C3AD" />}
              
            </button>
          </label>
          {errors.password && touched.password && (
            <p className={css.errorRassword}>{errors.password}</p>
          )}
          {values.password.length > 5 &&             
            !errors.password && (
              <p className={css.inputGood}>Password is secure</p>
            )}
        </div>
        <div className={css.passwordCont}>
          <label>
            <input
              placeholder="Confirm password"
              type={isActive2 ? 'text' : 'password'}
              name="confirmPassword"
              id="confirmPassword"
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? css.inputRegisterError
                  : css.inputRegister
              }
              value={values.confirmPassword}
              onChange={handleChange}
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
          {errors.confirmPassword && touched.confirmPassword && (
            <p className={css.errorRassword}>{errors.confirmPassword}</p>
          )}

          {/* {pass ? '' : <p className={css.errorRassword}>Password mismatch</p>}
          {em ? '' : <p className={css.errorRassword}>Email incorrect</p>}
          {err ? '' : <p className={css.errorRassword}>Enter data</p>} */}
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

export default RegisterForm;
