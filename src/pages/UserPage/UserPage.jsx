import styles from './UserPage.module.css'
import UserData from "components/UserPageComponents/UserData/UserData";
import LogOut from "components/LogOut/LogOut";

const UserPage = () => {
  return (
    <>
      <h2 className={styles.title}>My information:</h2>
      <div className={styles.box}>
        <UserData />
        <LogOut />
      </div>
    </>
  );
}

export default UserPage;