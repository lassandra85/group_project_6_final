import PropTypes from 'prop-types';

import css from './PetsList.module.css';

import PetsItem from '../PetsItem/PetsItem';

const PetsList = ({ pets }) => {
  return (
    <ul className={css.list}>
      {pets && pets.length > 0 ? (
        pets.map(pet => (
          <li key={pet._id}>
            <PetsItem pet={pet} />
          </li>
        ))
      ) : (
        <p className={css.notice}>Yo have no added pets yet</p>
      )}
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
