import { CiLogout } from 'react-icons/ci';
import styles from './LogOut.module.css'

const LogOut = () => {
    return (
      <div className={styles.logout}>
        <CiLogout size={24} fill="#54ADFF" />
        <button type="button" className={styles.button}>
          Log Out
        </button>
      </div>
    );
}

export default LogOut;