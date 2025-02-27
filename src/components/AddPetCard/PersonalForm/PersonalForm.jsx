import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { PawPrintIcon } from '../utils/icons';

import { PersonalFormWrapper, AddFormLabel, AddFormInput, AddFormLabelWrapper } from './PersonalForm.styled';

import { validateField } from '../validatePet';

const PersonalForm = ({ formData, setFormData, nextStep, backStep }) => {
  const [errors, setErrors] = useState({});
  const [isDisabled, setIsDisabled] = useState(false);
  const [maxDate, setMaxDate] = useState();


  const isNameFieldValid = Boolean(!errors.name && !!formData.name);
  const isBirthdayFieldValid = Boolean(!errors.birthday && !!formData.birthday);
  const isBreedFieldValid = Boolean(!errors.breed && !!formData.breed);
  const isTitleFieldValid = Boolean(!errors.title && !!formData.title);

   useEffect(() => {
    if (formData.category === 'my-pet') {
      setIsDisabled(
        !(isNameFieldValid && isBirthdayFieldValid && isBreedFieldValid)
      );
    }

    if (formData.category !== 'my-pet') {
      setIsDisabled(
        !(
          isNameFieldValid &&
          isBirthdayFieldValid &&
          isBreedFieldValid &&
          isTitleFieldValid
        )
      );
    }
    setMaxDate(getCurrentDate());
  }, [
    errors,
    formData.category,
    isBirthdayFieldValid,
    isBreedFieldValid,
    isNameFieldValid,
    isTitleFieldValid,
  ]);

  function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  const handleInputChange = e => {
    const { name, value } = e.target;

    setErrors(prevState => ({ ...prevState, [name]: '' }));

    const inputValue =
      name === 'birthday'
        ? new Date(value).toLocaleDateString('uk-UA', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        : value;

    setFormData(prevState => ({
      ...prevState,
      [name]: inputValue,
    }));
  };

  return (
    <PersonalFormWrapper>
      {formData.category !== 'my-pet' && (
        <AddFormLabelWrapper>
          <AddFormLabel htmlFor="title">
            Title of add:
            <AddFormInput
              placeholder="Type title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              onBlur={() => validateField('title', formData, setErrors)}
              className={errors.title ? 'invalid' : ''}
            />
          </AddFormLabel>
          {!!errors.title && <ErrorMessage message={errors.title} />}
        </AddFormLabelWrapper>
      )}
      <AddFormLabelWrapper>
        <AddFormLabel htmlFor="name">
          Name:
          <AddFormInput
            placeholder="Type name pet"
            type="text"
            name="name"
            onChange={handleInputChange}
            value={formData.name}
            onBlur={() => validateField('name', formData, setErrors)}
            className={errors.name ? 'invalid' : ''}
          />
        </AddFormLabel>
        {!!errors.name && <ErrorMessage message={errors.name} />}
      </AddFormLabelWrapper>
      <AddFormLabelWrapper>
        <AddFormLabel htmlFor="birthday">
          Birthday:
          <AddFormInput
            placeholder="Type date of birth"
            type="date"
            name="birthday"
            data-pattern="**.**.****"
            max={maxDate}
            onChange={handleInputChange}
            value={formData.birthday.split('.').reverse().join('-')}
            onBlur={() => validateField('birthday', formData, setErrors)}
            className={errors.birthday ? 'invalid' : ''}
          />
        </AddFormLabel>
        {!!errors.birthday && <ErrorMessage message={errors.birthday} />}
      </AddFormLabelWrapper>
      <AddFormLabelWrapper>
        <AddFormLabel htmlFor="breed">
          Breed:
          <AddFormInput
            placeholder="Type breed"
            type="text"
            name="breed"
            onChange={handleInputChange}
            value={formData.breed}
            onBlur={() => validateField('breed', formData, setErrors)}
            className={errors.breed ? 'invalid' : ''}
          />
        </AddFormLabel>
        {!!errors.breed && <ErrorMessage message={errors.breed} />}
      </AddFormLabelWrapper>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          type="button"
          text="Next"
          icon={<PawPrintIcon />}
          clickHandler={nextStep}
          filled={false}
          isDisabled={isDisabled}
        />
        <AddFormButtonBack
          type="button"
          clickHandler={backStep}
          text="Back"
          isLink={false}
        />
      </AddFormButtonWrapper>
    </PersonalFormWrapper>
  );
};

PersonalForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};

export default PersonalForm;
