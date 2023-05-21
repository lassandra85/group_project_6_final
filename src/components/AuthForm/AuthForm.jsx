import LoginForm from "components/LoginForm/LoginForm";
import  RegisterForm  from "../RegisterForm/RegisterForm";
import { RegisterPage } from "components/App";
 

const AuthForm = () => {


  return (
    <>
      {RegisterPage ? <RegisterForm></RegisterForm> : <LoginForm></LoginForm>}          
    </>
  )
  
};

export default AuthForm;
