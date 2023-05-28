import { CiLogout } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import styles from './LogOut.module.css'

const LogOut = () => {
  const dispatch = useDispatch();

    return (
      <div className={styles.logout}>
        <CiLogout size={24} fill="#54ADFF" />
        <button type="button" className={styles.button} onClick={()=> dispatch(logOut()) }>
          Log Out
        </button>
      </div>
    );
}

export default LogOut;