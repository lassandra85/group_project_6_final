import { useState/* , useEffect */ } from 'react';
import { CiLogout } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import ModalLogOut from '../ModalLogOut/ModalLogOut';
import Modal from '../Modal/Modal';
import { logOut } from 'redux/auth/operations';
import css from './LogOut.module.css'
import notify from '../../helpers/notification';


const LogOut = () => {

  const [isLogOut, setIsLogOut] = useState(false);
  const dispatch = useDispatch();

 /*  useEffect(() => {
    dispatch(logOut());
  }, [dispatch]); */

  const handleLogOut = () => {
    setIsLogOut(true);  
  };

  const toggleModal = () => {
    setIsLogOut(false);
  };

  const handleLogOutYes = async () => {
    
    try {
      dispatch(logOut());
      setIsLogOut(false);
      notify('info', 'You have logged out');
    } catch (error) {
      notify('error', "Please try again");
    }

  };

  return (
       <>
          <div className={css.logoutContainer}>
        
            <button type="button" className={css.button} onClick = {handleLogOut} >
              
              <CiLogout size={24} fill="#54ADFF" />
              
              Log Out
            
            </button>
        
          </div>
      
          {isLogOut && (
        
            <Modal toggleModal={toggleModal}>
          
              <ModalLogOut toggleModal={toggleModal} handleLogOut = {handleLogOutYes} />
            
            </Modal>
          )}
        </>
    );
}

export default LogOut;