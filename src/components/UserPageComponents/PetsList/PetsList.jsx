import PropTypes from 'prop-types';

import css from './PetsList.module.css';

import PetsItem from '../PetsItem/PetsItem';

const PetsList = ({ pets }) => {
  return (
    <ul className={css.list}>
      {pets.map(pet => (
        <li key={pet._id}>
          <PetsItem pet={pet} />
        </li>
      ))}
    </ul>
  );
};

PetsList.propTypes = {
  pets: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
    })
  ),
};

export default PetsList;
