import { useState, useEffect } from 'react';
import { CiLogout } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ModalLogOut from '../ModalLogOut/ModalLogOut';
import Modal from '../Modal/Modal';
import { logOut } from 'redux/auth/operations';
import css from './LogOut.module.css'
import notify from '../../helpers/notification';


const LogOut = () => {

  const [isLogOut, setIsLogOut] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logOut());
  }, [dispatch]);

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
      navigate('/');
      notify('info', 'You have logged out');
    } catch (error) {
      notify('error', "Please try again");
    }

  };

  return (
       <>
          <div className={css.logout}>
        
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