import css from '../ModalNotice/ModalNotice.module.css';
import {ReactComponent as HeartIcon} from 'image/icons/heart.svg';
import  Loader  from '../Loader/loader';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectors } from '../../redux/user/selectors';
import { selectFavorites } from '../../redux/notices/selectors';
import { getNoticeById } from '../../redux/notices/operations';

const ModalNotice = ({ item, categoryName, handleAddOrDeleteFavorite }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isLogged = useSelector(selectors.isLogged);

  useEffect(() => {
    if (!isLogged) {
      return;
    }
    dispatch(getNoticeById());
    return;
  }, [dispatch, isLogged]);

  return (
    
    <div className={css.containerNotice}>
      {<Loader />}

      <div className={css.coverNotice}>
        <div className={css.imgWrapperNotice}>
          {item.imageURL ? (
            <img src={item.imageURL} className={css.imgPets} alt="Pet" />
          ) : null}

          <span className={css.categoryNotice}>
            {categoryName ? (
              <p className={css.categoryName}> {categoryName} </p>
            ) : (
              <p className={css.categoryName}> {item.category} </p>
            )}
          </span>
        </div>

        <div className={css.textContentNotice}>
          <h3 className={css.titleNotice}> {item.title} </h3>

          <ul className={css.petData}>
            <li className={css.itemPetData}>
              <p className={css.mainTextNotice}> Name: </p>

              <p className={css.textNotice}> {item.name} </p>
            </li>

            <li className={css.itemPetData}>
              <p className={css.mainTextNotice}> Birthday: </p>
              <p className={css.textNotice}> {item.birthdate} </p>{' '}
            </li>

            <li className={css.itemPetData}>
              <p className={css.mainTextNotice}> Breed: </p>
              <p className={css.textNotice}> {item.breed} </p>{' '}
            </li>

            <li className={css.itemPetData}>
              <p className={css.mainTextNotice}> Place: </p>
              <p className={css.textNotice}> {item.location} </p>{' '}
            </li>

            <li className={css.itemPetData}>
              <p className={css.mainTextNotice}> The sex: </p>
              <p className={css.textNotice}> {item.sex} </p>{' '}
            </li>

            <li className={css.itemPetData}>
              <p className={css.mainTextNotice}> Email: </p>

              <a href={`mailto: ${item.email}`} className={css.mailNotice}>
                {item.email}
              </a>
            </li>

            <li className={css.itemPetData}>
              <p className={css.mainTextNotice}> Phone: </p>

              {item.mobilePhone ? (
                <a href={`tel: ${item.mobilePhone}`} className={css.telNotice}>
                  {item.mobilePhone}
                </a>
              ) : (
                <p className={css.textNotice}> Not provided </p>
              )}
            </li>

            {item.category === 'sell' && item.price ? (
              <li className={css.itemPetData}>
                <p className={css.mainTextNotice}> Price: </p>{' '}
                <p className={css.textNotice}> {item.price}$ </p>
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <p className={css.commentsNotice}> Comments: {item.comments} </p>

      <div className={css.noticeBtnContainer}>
        <a className={css.noticeContactBtn} href={`tel:${item.mobilePhone}`}>
          Contact
        </a>

        <button
          className={css.noticeLikedBtn}
          type="button"
          onClick={handleAddOrDeleteFavorite}
        >
          {!favorites.find(favorite => favorite._id === item._id)
            ? 'Add to'
            : 'Remove from'}

          <HeartIcon className={css['noticeLikedSvg']} />
        </button>
      </div>
    </div>
  );
};

export default ModalNotice;
