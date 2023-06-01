import * as yup from 'yup';


const emailRules = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
const passwordRules = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_.-]+$/;


export const registerValidation = yup.object({
  email: yup
    .string('Enter your email')
    .email('Please enter a valid email')
    .required('Email is required')
    .matches(emailRules, {message:'Please enter a valid email'}),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be min 6 characters')
    .required('Password is required')
    .matches(passwordRules,{message:"Password min 6 characters + big and small letters"}),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required')
    
});