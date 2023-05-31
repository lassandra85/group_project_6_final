import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cloud } from 'helpers';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';

import { ReactComponent as TrashIcon } from 'image/icons/trash-2.svg';

import css from './PetsItem.module.css';

import { deletePet } from 'redux/auth/operations';

const PetsItem = ({ pet }) => {
  const dispatch = useDispatch();
  const { _id, name, birthday, breed, comments, photoURL } = pet;

  const path = photoURL
    .split('/')
    .reduce((acc, item) => {
      if (item.includes('pet')) {
        acc.push(item);
      }
      return acc;
    }, [])
    .join('/');

  const petImage = cloud.image(path);

  const getSizeImage = value => {
    petImage
      .resize(
        fill().width(value).height(value).gravity(focusOn(FocusOn.faces()))
      )
      .quality('auto');

    return petImage.toURL();
  };

  const handleClick = () => {
    dispatch(deletePet(_id));
  };

  return (
    <div className={css.card}>
      <picture>
        <source media="(min-width: 1280px)" srcSet={getSizeImage(161)} />
        <source
          media="(min-width: 768px) and (max-width: 1279px)"
          srcSet={getSizeImage(128)}
        />
        <source media="(max-width: 767px)" srcSet={getSizeImage(240)} />
        <img src={getSizeImage(240)} alt="pet" className={css.photo} />
      </picture>
      <button type="button" className={css['trash-btn']} onClick={handleClick}>
        <TrashIcon className={css['trash-icon']} />
      </button>
      <div className={css.info}>
        <p>
          <span className={css['info-type']}>Name: </span>
          <span>{name}</span>
        </p>
        <p>
          <span className={css['info-type']}>Date of birth: </span>
          <span>{birthday}</span>
        </p>
        <p>
          <span className={css['info-type']}>Breed: </span>
          <span>{breed}</span>
        </p>
        <p>
          <span className={css['info-type']}>Comments: </span>
          <span>{comments}</span>
        </p>
      </div>
    </div>
  );
};

PetsItem.propTypes = {
  pet: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    birthday: PropTypes.string,
    breed: PropTypes.string,
    comments: PropTypes.string,
    photoURL: PropTypes.string,
  }),
};

export default PetsItem;
