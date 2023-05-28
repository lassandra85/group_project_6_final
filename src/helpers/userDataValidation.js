import * as Yup from 'yup';

const cityRegex =
  /^(?:(?:[a-zA-Zа-яА-ЯіІїЇєЄ]+(?:[.'’‘`-][a-zA-Zа-яА-ЯіІїЇєЄ]+)*)\s*)+$/;
const nameRegex = /^[a-zA-Zа-яА-ЯІіїЇґҐ\s-]+$/;
const birthdayRegex = /^([0-2]\d|3[0-1])\.(0\d|1[0-2])\.\d{4}$/;

 const validationSchema = Yup.object().shape({
  name: Yup.string().matches(nameRegex, 'Enter your name').required(),
  email: Yup.string().email('Invalid email'),
  birthday: Yup.string().matches(
    birthdayRegex,
    'Invalid date format, expected dd.mm.yyyy'
  ).required(),
  phone: Yup.string().matches(/^\+380\d{9}$/, 'Incorrect phone number format'),
  city: Yup.string().matches(
    cityRegex,
    'Enter the city in the format "Brovary", "Kyiv", "Akhtyrka", "Sumy"'
  ),
 });
export default validationSchema;


// при подключении не находит модуль почему-то !!!
