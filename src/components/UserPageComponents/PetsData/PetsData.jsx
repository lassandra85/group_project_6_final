import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import css from './PetsData.module.css';

import { ReactComponent as PlusIcon } from 'image/icons/plus-small.svg';

import PetsList from '../PetsList/PetsList';

const PetsData = ({ pets }) => {
  return (
    <section className={css.section}>
      <div className={css['section-head']}>
        <h2 className={css.title}>My pets:</h2>
        <Link to="/add-pet" className={css['add-pet']}>
          <span>Add Pet</span>
          <PlusIcon className={css['plus-icon']} />
        </Link>
      </div>
      <PetsList pets={pets} />
    </section>
  );
};

PetsData.propTypes = {
  pets: PropTypes.arrayOf(PropTypes.object),
};

export default PetsData;
