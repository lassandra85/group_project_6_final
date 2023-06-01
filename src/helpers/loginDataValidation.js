import * as yup from 'yup';



export const loginValidation = yup.object({
  email: yup
    .string('Enter your email')
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')    
    .required('Password is required'),
});