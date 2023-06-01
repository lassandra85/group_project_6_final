import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

import { validateField } from '../validatePet';

import { PlusIcon, MaleIcon, FemaleIcon, PawPrintIcon } from '../utils/icons';

import {
  AddFormTextArea,
  AddFormSexWrapper,
  AddFormSexLabel,
  AddFormImageWrapper,
  AddFormImageLabel,
  FileInput,
  FirstPartFormWrapper,
  SecondPartFormWrapper,
  MoreInfoFormWrapper,
  AddFormRadioWrapper,
  AddFormTextAreaLabel,
  AddFormInput,
  AddFormLabel,
  AddFormLabelWrapper,
  AddFormRadioButton,
} from './MoreInfoForm.styled';

const MoreInfo = ({ formData, setFormData, submit, backStep }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const [imageValue, setImageValue] = useState('');
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const isFileFieldValid = Boolean(!errors.file && !!formData.file);
  const isCommentsFieldValid = Boolean(!errors.comments);
  const isLocationFieldValid = Boolean(!errors.location && !!formData.location);
  const isSexFieldValid = Boolean(!errors.sex && !!formData.sex);
  const isPriceFieldValid = Boolean(!errors.price && !!formData.price);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    if (formData.category === 'sell') {
      setIsDisabled(
        !(
          isFileFieldValid &&
          isLocationFieldValid &&
          isSexFieldValid &&
          isPriceFieldValid &&
          isCommentsFieldValid
        )
      );
    }
    if (formData.category === 'my-pet') {
      setIsDisabled(!(isFileFieldValid && isCommentsFieldValid));
    } else {
      setIsDisabled(
        !(
          isFileFieldValid &&
          isLocationFieldValid &&
          isSexFieldValid &&
          isCommentsFieldValid
        )
      );
    }
  }, [
    errors,
    formData.category,
    isCommentsFieldValid,
    isLocationFieldValid,
    isFileFieldValid,
    isPriceFieldValid,
    isSexFieldValid,
  ]);

  const handleInputChange = e => {
    const { name, value, type, files } = e.target;
    const fieldValue = type === 'file' ? files[0] : value;

    setErrors(prevState => ({ ...prevState, [name]: '' }));

    if (type === 'file') {
      setImageValue(value);
    }

    setFormData(prevState => ({
      ...prevState,
      [name]: fieldValue,
    }));
  };

  return (
    <>
      <MoreInfoFormWrapper category={formData.category}>
        <FirstPartFormWrapper category={formData.category}>
          {formData.category !== 'my-pet' && (
            <AddFormSexWrapper>
              <p>The Sex</p>
              <AddFormRadioWrapper>
                <AddFormRadioButton
                  type="radio"
                  id="female"
                  name="sex"
                  value="female"
                  onChange={handleInputChange}
                  checked={formData.sex === 'female'}
                  onBlur={() => validateField('sex', formData, setErrors)}
                />
                <AddFormSexLabel htmlFor="female">
                  <FemaleIcon stroke="#F43F5E" />
                  Female
                </AddFormSexLabel>
                <AddFormRadioButton
                  type="radio"
                  id="male"
                  name="sex"
                  value="male"
                  onChange={handleInputChange}
                  checked={formData.sex === 'male'}
                  onBlur={() => validateField('sex', formData, setErrors)}
                />
                <AddFormSexLabel htmlFor="male">
                  <MaleIcon stroke="#54ADFF" />
                  Male
                </AddFormSexLabel>
              </AddFormRadioWrapper>
            </AddFormSexWrapper>
          )}
          <AddFormImageLabel htmlFor="pet-image" category={formData.category}>
            {formData.category === 'my-pet' || viewportWidth < 768
              ? 'Add photo'
              : 'Load the pet’s image:'}
            <AddFormImageWrapper>
              {!formData.file && <PlusIcon width="30" height="30" />}
              {!!formData.file && (
                <img
                  id="image"
                  src={URL.createObjectURL(formData.file)}
                  alt={formData.file.name}
                />
              )}
            </AddFormImageWrapper>
            <FileInput
              type="file"
              id="pet-image"
              name="file"
              accept=".png, .jpg, .jpeg, .webp"
              onChange={handleInputChange}
              value={imageValue}
              onBlur={() => validateField('file', formData, setErrors)}
            />
          </AddFormImageLabel>
        </FirstPartFormWrapper>
        <SecondPartFormWrapper>
          {formData.category !== 'my-pet' && (
            <AddFormLabelWrapper>
              <AddFormLabel htmlFor="location">
                Location
                <AddFormInput
                  placeholder="Type of location"
                  type="text"
                  name="location"
                  onChange={handleInputChange}
                  value={formData.location}
                  onBlur={() => validateField('location', formData, setErrors)}
                  className={errors.location ? 'invalid' : ''}
                />
              </AddFormLabel>
              {!!errors.location && <ErrorMessage message={errors.location} />}
            </AddFormLabelWrapper>
          )}
          {formData.category === 'sell' && (
            <AddFormLabelWrapper>
              <AddFormLabel htmlFor="price">
                Price
                <AddFormInput
                  placeholder="Type of price"
                  type="number"
                  name="price"
                  onChange={handleInputChange}
                  value={formData.price}
                  onBlur={() => validateField('price', formData, setErrors)}
                  className={errors.price ? 'invalid' : ''}
                />
              </AddFormLabel>
              {!!errors.price && <ErrorMessage message={errors.price} />}
            </AddFormLabelWrapper>
          )}
          <AddFormLabelWrapper>
            <AddFormTextAreaLabel htmlFor="comments">
              Comments
              <AddFormTextArea
                component="textarea"
                placeholder="Type comments"
                name="comments"
                onChange={handleInputChange}
                value={formData.comments}
                onBlur={() => validateField('comments', formData, setErrors)}
                className={errors.comments ? 'invalid' : ''}
              />
            </AddFormTextAreaLabel>
            {!!errors.comments && <ErrorMessage message={errors.comments} />}
          </AddFormLabelWrapper>
        </SecondPartFormWrapper>
      </MoreInfoFormWrapper>
      <AddFormButtonWrapper isMoreInfo={true} category={formData.category}>
        <AddFormButtonNext
          type="submit"
          text="Done"
          icon={<PawPrintIcon />}
          filled={true}
          clickHandler={submit}
          isDisabled={isDisabled}
        />
        <AddFormButtonBack
          type="button"
          clickHandler={backStep}
          text="Back"
          isLink={false}
        />
      </AddFormButtonWrapper>
    </>
  );
};

MoreInfo.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  backStep: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default MoreInfo;
