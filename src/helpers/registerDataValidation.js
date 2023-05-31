import * as Yup from 'yup';



const registerValidation = Yup.object({
  email: Yup
    .string('Enter your email')
    .email('Enter a valide format of email')
    .required('Email is required'),
  password: Yup
    .string('Enter your password')
    .min(6, 'Password should be min 6 characters')
    .required('Password is required'),
  confirmPassword: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
});

export default registerValidation;