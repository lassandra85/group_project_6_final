import AuthForm from "../../components/AuthForm/AuthForm"
import css from "../AddPetPage/AddPetPage.module.css"; 

// const str = 'vovan@mail.com';
// const cutStr = str.split('@')


const RegisterPage = () => {
    return (
        <div className={css.mainContainer}>
                <AuthForm></AuthForm>
        </div>
    );
}

export default RegisterPage;