import NoticesSearch from 'components/NoticesSearch/NoticesSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesFilters from 'components/NoticesFilter/NoticesFilter';
import AddPetBtn from 'components/AddPetCard/AddPetButton/AddPetBtn';
import NoticesCategoriesList from 'components/NoticesCategoriesList/NoticesCategoriesList';

// import Pagination from 'components/Pagination/Pagination';
import ModalNotice from 'components/ModalNotice/ModalNotice';
import ModalUnAuthorized from 'components/ModalUnAuthorized/ModalUnAuthorized';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { useSelector,useDispatch  } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
import { useLocation } from 'react-router-dom';
import {
  getNotices,
  getNoticesByQuery,
  getUsersNotices,
  getFavoriteNotices,
  getNoticeById,
  addFavoriteNotice,
  removeFavoriteNotice,
  removeNotice,
  removeFavoriteNoticeOnFavoritepage,
} from 'redux/notices/operations';
import { setCurrentNotice, setNotices } from 'redux/notices/actions';
import { selectNotices, selectTotalHitsNotices } from 'redux/notices/selectors';

import { selectUser } from 'redux/auth/selectors';

import {
  Wrapper,
  Title,
  Container,
  Filters,
  ListContainer,
} from './NoticesPage.styled';


const NoticesPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { categoryName } = useParams();
  const totalHits = useSelector(selectTotalHitsNotices);
  const { isLoggedIn } = useSelector(selectAuth);
  const user = useSelector(selectUser);
  const notices = useSelector(selectNotices);
  
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [isAuthorizedModalOpen, setIsAuthorizedModalOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [ageFilter, setAgeFilter] = useState('');
  const [teamFilter, setTeamFilter] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get('page') || 1;
  console.log(totalPages)
  useEffect(() => {
    dispatch(setNotices());

    setTeamFilter(false);

    const searchQuery = {
      page,
    };

    if (categoryName === 'my-pets') {
      if (query) searchQuery.query = query;
      if (genderFilter) searchQuery.gender = genderFilter;
      if (ageFilter) searchQuery.age = ageFilter;

      dispatch(getUsersNotices({ category: categoryName, ...searchQuery }));

      setSearchParams(searchQuery);
    } else if (categoryName === 'favorite') {
      if (query) searchQuery.query = query;
      if (genderFilter) searchQuery.gender = genderFilter;
      if (ageFilter) searchQuery.age = ageFilter;

      dispatch(getFavoriteNotices({ category: categoryName, ...searchQuery }));

      setSearchParams(searchQuery);
    } else if (!query) {
      if (genderFilter) searchQuery.gender = genderFilter;
      if (ageFilter) searchQuery.age = ageFilter;

      dispatch(getNotices({ category: categoryName, ...searchQuery }));

      setSearchParams(searchQuery);
    } else {
      if (query) searchQuery.query = query;
      if (genderFilter) searchQuery.gender = genderFilter;
      if (ageFilter) searchQuery.age = ageFilter;

      dispatch(getNoticesByQuery({ category: categoryName, ...searchQuery }));

      setSearchParams(searchQuery);
    }
  }, [
    ageFilter,
    categoryName,
    dispatch,
    genderFilter,
    page,
    query,
    setSearchParams,
  ]);

  useEffect(() => {
    setQuery('');
    setAgeFilter('');
    setGenderFilter('');

    dispatch(setNotices());
 
  }, [dispatch, teamFilter]);

  useEffect(() => {
    const pageCount = Math.ceil(totalHits / 12);

    setTotalPages(pageCount);
  }, [totalHits]);

  const onFormSubmit = query => {
    setQuery(query);
  };

  const toggleModal = () => {
    if (!isItemModalOpen) dispatch(setCurrentNotice());

    setIsItemModalOpen(prevState => !prevState);
  };

  const moreBtnClickHandler = async _id => {
    toggleModal();
    dispatch(getNoticeById(_id));
  };

  const toggleFavorites = pet => {
    if (!isLoggedIn) {
      toggleUnauthorizeModal();
      return;
    }

    if (pathname.includes('favorite')) {
      dispatch(removeFavoriteNoticeOnFavoritepage(pet));
      return;
    }

    if (pet.favorite.includes(user.id)) {
      dispatch(removeFavoriteNotice(pet));
      return;
    }

    dispatch(addFavoriteNotice(pet));
  };

  const onDeleteMyPet = _id => {
    dispatch(removeNotice(_id));
  };

  const onPageChange = currentPage => {
    if (page === currentPage) {
      return;
    }

    const searchQuery = { page: currentPage };

    if (query) searchQuery.query = query;
    if (genderFilter) searchQuery.gender = genderFilter;
    if (ageFilter) searchQuery.age = ageFilter;

    setSearchParams(searchQuery);
  };

  const toggleUnauthorizeModal = () => {
    setIsAuthorizedModalOpen(prevState => !prevState);
  };
  console.log(onPageChange)
  return (
    <Wrapper>
      <Title>Find your favorite pet</Title>
      <NoticesSearch onFormSubmit={onFormSubmit} />
      <Filters>
        <NoticesCategoriesNav isUser={isLoggedIn} />
        <Container>
          <NoticesFilters
            chooseGender={setGenderFilter}
            chooseAge={setAgeFilter}
            chooseKotikiFilter={setTeamFilter}
          />
          <AddPetBtn
            isfix ={true}
            text="Add pet"
            path="/add-pet"
            toggleUnauthorizeModal={toggleUnauthorizeModal}
          />
        </Container>
      </Filters>
      <ListContainer>
 
          <NoticesCategoriesList
            items={notices}
            moreBtnClickHandler={moreBtnClickHandler}
            toggleFavorites={toggleFavorites}
            onDeleteBtnClick={onDeleteMyPet}
            chosenAgeFilter={ageFilter}
            chosenGenderFilter={genderFilter}
            toggleUnauthorizeModal={toggleUnauthorizeModal}
          />
        
  
     
        {/* <Pagination
          onPageChange={onPageChange}
          currentPage={Number(page)}
          totalPagesCount={totalPages}
        /> */}
      </ListContainer>
      {isItemModalOpen && (
        <ModalNotice
          toggleModal={toggleModal}
          onFavoriteClick={toggleFavorites}
        />
      )}
      {isAuthorizedModalOpen && (
        <ModalUnAuthorized toggleUnauthorizeModal={toggleUnauthorizeModal} />
      )}
    
    </Wrapper>
  );
};

export default NoticesPage;