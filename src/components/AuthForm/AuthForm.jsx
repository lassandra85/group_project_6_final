import LoginForm from "components/LoginForm/LoginForm";
import  RegisterForm  from "../RegisterForm/RegisterForm";
import { App, RegisterPage } from "components/App";
 

const AuthForm = () => {

  console.log(App())
  return (
    <>
      {RegisterPage ? <RegisterForm></RegisterForm> : <LoginForm></LoginForm>}          
    </>
  )
  
};

export default AuthForm;
