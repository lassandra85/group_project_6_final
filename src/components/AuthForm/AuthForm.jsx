import css from '../AuthForm/AuthForm.module.css';

const AuthForm = () => {
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
        <label>
          <input
            placeholder="Password"
            type="password"
            name="password"
            className={css.inputRegister}
          ></input>
        </label>
        <label>
          <input
            placeholder="Confirm password"
            type="password"
            name="confirm password"
            className={css.inputRegister}
          ></input>
        </label>
        <button type="submit" className={css.bttnRegister}>Registration</button>
          </form>
          <div className={css.containerLog}>
      <p className={css.text}>Already have an account?</p>
              <a className={css.link} href="/">Login</a>
              </div>
    </div>
  );
};

export default AuthForm;
