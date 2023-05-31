import LoginForm from "../../components/LoginForm/LoginForm";
import css from "../AddPetPage/AddPetPage.module.css"; 

const LoginPage = () => {
    return (
        <div className={css.mainContainer}>
            <LoginForm></LoginForm>
        </div>
    );
}

export default LoginPage;