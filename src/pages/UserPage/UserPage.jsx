import styles from './UserPage.module.css'
import UserData from "components/UserPageComponents/UserData/UserData";
import PetsData from 'components/UserPageComponents/PetsData/PetsData';
import LogOut from "components/LogOut/LogOut";
import { getUserInfo } from 'redux/auth/operations';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPet } from 'redux/auth/selectors';

const UserPage = () => {
  const petsData = useSelector(selectPet);
   const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo());
   }, [dispatch]);
  
  return (
    <>
      <h2 className={styles.title}>My information:</h2>
      <div className={styles.box}>
        <UserData />
        <LogOut />
        <PetsData pets={[...petsData]} /> 
      </div>
    </>
  );
};

export default UserPage;
