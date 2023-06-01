import * as yup from 'yup';



export const registerValidation = yup.object({
  email: yup
    .string('Enter your email')
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be min 6 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
});