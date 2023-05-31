import React from 'react';
import AddPetPageForm from '../../components/AddPetCard/PetPageForm/PetPageForm';
import css from "./AddPetPage.module.css" 


const AddPetPage = () => {
  return (
          <div className={css.mainContainer}>
            <AddPetPageForm />;
          </div>
  )
};

export default AddPetPage;
