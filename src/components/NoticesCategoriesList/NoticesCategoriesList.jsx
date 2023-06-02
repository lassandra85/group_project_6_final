import PropTypes from 'prop-types';
import Button from '../Button/Button';
import NoticeCardSkeleton from 'components/NoticeCardSkeleton/NoticeCardSkeleton';
import NoItemsFound from '../NoItemsFound/NoItemsFound';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/auth/selectors';
import { selectNoticesIsLoading } from 'redux/notices/selectors';
import { ageDeterminationFunc, cutTitle, transformCategoryName } from 'helpers';

import {
  HeartIcon,
  LocationIcon,
  ClockIcon,
  MaleIcon,
  FemaleIcon,
  PawPrintIcon,
  TrashIcon,
} from 'utils/icons';

import {
  List,
  ListItem,
  ImageWrapper,
  Category,
  FavoriteBtn,
  DeleteBtn,
  InfoWrapper,
  Info,
  AgeInfo,
  GenderInfo,
  CardFooter,
  Comments,
} from './NoticesCategoriesList.styled';

const NoticesCategoriesList = ({
  items,
  moreBtnClickHandler,
  toggleFavorites,
  onDeleteBtnClick,
  chosenAgeFilter,
  chosenGenderFilter,
}) => {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectNoticesIsLoading);

  const { pathname } = useLocation();

  if (!items) return;

  const pets = items.map(pet => {
    const category = transformCategoryName(pet.category);
    const title = cutTitle(pet.comments);
    const age = ageDeterminationFunc(pet.date);
    const isDeleteBtnShown = Boolean(
      pathname.includes('my-pets') || pet.owner._id === user.id
    );
    const favorite =
      pet.favorite.length > 0 && pet.favorite.includes(user.id) ? true : false;

    return (
      <ListItem key={pet._id}>
        <ImageWrapper bgi={pet.fileURL}>
          <Category>{category}</Category>
          <FavoriteBtn
            inFavorite={favorite}
            type="button"
            onClick={() => toggleFavorites(pet)}
            title={favorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <HeartIcon />
          </FavoriteBtn>
          {isDeleteBtnShown && (
            <DeleteBtn
              type="button"
              onClick={() => onDeleteBtnClick(pet._id)}
              title="Delete from my ads"
            >
              <TrashIcon />
            </DeleteBtn>
          )}
          <InfoWrapper>
            <Info>
              <LocationIcon />
              {pet.location}
            </Info>
            <AgeInfo inRange={chosenAgeFilter}>
              <ClockIcon />
              {age}
            </AgeInfo>
            <GenderInfo inRange={chosenGenderFilter}>
              {pet.sex === 'male' ? <MaleIcon /> : <FemaleIcon />}
              {pet.sex}
            </GenderInfo>
          </InfoWrapper>
        </ImageWrapper>
        <CardFooter>
          <Comments>{title}</Comments>
          <Button
            type="button"
            text="Learn more"
            icon={<PawPrintIcon />}
            clickHandler={() => moreBtnClickHandler(pet._id)}
          />
        </CardFooter>
      </ListItem>
    );
  });

  return (
    <>
      {!items.length && !isLoading && (
        <NoItemsFound text="Nothing was found for your request." />
      )}
      {isLoading && (
        <List>
          <NoticeCardSkeleton cards={4} />
        </List>
      )}
      {items.length > 0 && !isLoading && <List>{pets}</List>}
    </>
  );
};

NoticesCategoriesList.propTypes = {
  moreBtnClickHandler: PropTypes.func.isRequired,
};

export default NoticesCategoriesList;
