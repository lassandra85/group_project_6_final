// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Field } from 'formik';

import { AddFormButtonWrapper } from '../PetPageForm/PetPageForm.styled';
import css from './ChooseForm.module.css'
import AddFormButtonBack from '../AddFormButton/AddFormButtonBack';
import AddFormButtonNext from '../AddFormButton/AddFormButtonNext';
// import { PawPrintIcon } from '../utils/icons';

const ChooseForm = ({ formData, setFormData, nextStep, cancel, setValues }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (!formData.category) setIsDisabled(true);
    else setIsDisabled(false);
  }, [formData.category]);

  const handleCategoryChange = e => {
    const { name, value } = e.target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={css.CategoryWrapper}>
      <Field className={css.AddFormRadioButton}
        type="radio"
        name="category"
        value="my-pet"
        id="my-pet"
        onChange={handleCategoryChange}
        checked={formData.category === 'my-pet'}
      />
      <label className={css.RadioCategoryLabel} htmlFor="my-pet">Your pet</label>
      <Field className={css.AddFormRadioButton}
        type="radio"
        name="category"
        value="sell"
        id="sell"
        checked={formData.category === 'sell'}
        onChange={handleCategoryChange}
      />
      <label className={css.RadioCategoryLabel} htmlFor="sell">Sell</label>
      <Field className={css.AddFormRadioButton}
        type="radio"
        name="category"
        value="lost-found"
        id="lost-found"
        checked={formData.category === 'lost-found'}
        onChange={handleCategoryChange}
      />
      <label className={css.RadioCategoryLabel} htmlFor="lost-found">Lost/found</label>
      <Field className={css.AddFormRadioButton}
        type="radio"
        name="category"
        value="for-free"
        id="for-free"
        checked={formData.category === 'for-free'}
        onChange={handleCategoryChange}
      />
      <label className={css.RadioCategoryLabel} htmlFor="for-free">In good hands</label>
      <AddFormButtonWrapper>
        <AddFormButtonNext
          isDisabled={isDisabled}
          type="button"
          text="Next"
          // icon={<PawPrintIcon />}
          clickHandler={nextStep}
          filled={false}
        />
        <AddFormButtonBack text="Cancel" isLink={true} path={cancel} />
      </AddFormButtonWrapper>
    </div>
  );
};

// ChooseForm.propTypes = {
//   formData: PropTypes.object.isRequired,
//   setFormData: PropTypes.func.isRequired,
//   cancel: PropTypes.oneOfType([
//     PropTypes.string.isRequired,
//     PropTypes.object.isRequired,
//   ]),
//   nextStep: PropTypes.func.isRequired,
// };

export default ChooseForm;
