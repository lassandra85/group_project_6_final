import LoginForm from "components/LoginForm/LoginForm";
import  RegisterForm  from "../RegisterForm/RegisterForm";
import  RegisterPage  from "pages/RegisterPage/RegisterPage";
 

const AuthForm = () => {


  return (
    <>
      {RegisterPage ? <RegisterForm></RegisterForm> : <LoginForm></LoginForm>}          
    </>
  )
  
};

export default AuthForm;
