import styles from './UserPage.module.css';
import UserData from 'components/UserPageComponents/UserData/UserData';
import PetsData from 'components/UserPageComponents/PetsData/PetsData';
import LogOut from 'components/LogOut/LogOut';
import { getUserInfo } from 'redux/auth/operations';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPets, selectNewUser } from 'redux/auth/selectors';
import ModalCongrats from 'components/ModalCongrats/ModalCongrats';
import Modal from 'components/Modal/Modal';

const UserPage = () => {
  const dispatch = useDispatch();
  const pets = useSelector(selectPets);
  const newUser = useSelector(selectNewUser);
  const [showModal, setShowModal] = useState(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    dispatch(getUserInfo());
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>My information:</h2>
          <div className={styles.box}>
            <UserData />
            <LogOut />
          </div>
        </div>
        <PetsData pets={pets} />
      </div>
      {newUser && showModal && (
        <Modal toggleModal={toggleModal}>
          <ModalCongrats toggleModal={toggleModal} />
        </Modal>
      )}
    </>
  );
};

export default UserPage;
