import PropTypes from 'prop-types';
import { cloud } from 'helpers';
import { fill } from '@cloudinary/url-gen/actions/resize';
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity';
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn';

import { ReactComponent as TrashIcon } from 'image/icons/trash-2.svg';

import css from './PetsItem.module.css';

const PetsItem = ({ pet }) => {
  //   const { name, birthday, breed, comments, fileURL } = pet;

  const url =
    'https://res.cloudinary.com/dboarinns/image/upload/v1685189425/pet_app/pets/pet_app/pets646e24527f053eb2a6cf828dkitty.jpg';

  const path = url
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

  return (
    <div className={css.card}>
      <picture>
        <source media="(max-width: 767px)" srcSet={getSizeImage(240)} />
        <source
          media="(min-width: 768px) and (max-width: 1279px)"
          srcSet={getSizeImage(128)}
        />
        <source media="(min-width: 1280px)" srcSet={getSizeImage(161)} />
        <img src={getSizeImage(240)} alt="pet" className={css.photo} />
      </picture>
      <button type="button" className={css['trash-btn']}>
        <TrashIcon className={css['trash-icon']} />
      </button>
      <div className={css.info}>
        <p>
          <span className={css['info-type']}>Name: </span>
          <span>Jack</span>
        </p>
        <p>
          <span className={css['info-type']}>Date of birth: </span>
          <span>22.04.2018</span>
        </p>
        <p>
          <span className={css['info-type']}>Breed: </span>
          <span>Persian cat</span>
        </p>
        <p>
          <span className={css['info-type']}>Comments: </span>
          <span>
            Jack is a gray Persian cat with green eyes. He loves to be pampered
            and groomed, and enjoys playing with toys. Although a bitshy, he's a
            loyal and affectionate lap cat.
          </span>
        </p>
      </div>
    </div>
  );
};

PetsItem.propTypes = {
  pet: PropTypes.shape({
    name: PropTypes.string,
    birthday: PropTypes.string,
    breed: PropTypes.string,
    comments: PropTypes.string,
    fileURL: PropTypes.string,
  }),
};

export default PetsItem;
