import styles from './UserData.module.css';
import { useState } from 'react';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { BsCheck2 } from 'react-icons/bs';
import UserDataItem from 'components/UserDataItem/UserDataItem';
import userPhoto from '../../image/user-photo-default.png'

const userDataNotFilled = {
// на маунте компонента делать запрос на бекенд на получение данных пользователя  и если их нет то значение по дефолту, а если есть то подставлять данные с бека
}
const UserData = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);

  const handleChange = (e) => {
    setSelectedFile(e.target.files[0])
    const src = window.URL.createObjectURL(e.target.files[0]);
    setImgSrc(src)
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select file!');
      return
    }
    const formData = new FormData();
    formData.append('file', imgSrc);  //название файла нужно узнать у бекенда, под каким ключом он лежит
console.log(formData);
    //сделать запрос на сервер что бы сохранить картинку там useDispatch( patch   data...) отправлять imgSrc
  }

  return (
    <div className={styles.box}>
      <div className="photo-container">
        <img
          className={styles.photo}
          src={imgSrc ? imgSrc : userPhoto}
          alt="user"
          width={182}
          height={182}
        />
        <div className={styles.edit}>
          {selectedFile ? (
            <BsCheck2
              onClick={handleUpload} // onSubmit?
              size={24}
              color="#54ADFF"
              cursor={'pointer'}
            />
          ) : (
            <MdOutlinePhotoCamera size={24} color="#54ADFF" />
          )}
          <div className={styles.container}>
            {selectedFile ? (
              <p className={styles.confirm}>Confirm</p>
            ) : (
              <>
                <input
                  type="file"
                  id="file"
                  name="file"
                  className={styles.input}
                  onChange={handleChange}
                  accept="image/png, image/jpeg"
                />
                <label className={styles.label} htmlFor="file">
                  Edit Photo
                </label>
              </>
            )}
          </div>
        </div>
      </div>
      <form className={styles.form}>
        <UserDataItem
          id={'user_name'}
          inputName={'Name:'}
          placeholder={'Anna |'}
          formType={'text'}
        />
        <UserDataItem
          id={'user_email'}
          inputName={'Email:'}
          placeholder={'anna00@gmail.com|'}
          formType={'email'}
        />
        <UserDataItem
          id={'user_birthday'}
          inputName={'Birthday:'}
          placeholder={'00.00.0000'}
          formType={'text'}
        />
        <UserDataItem
          id={'user_phone'}
          inputName={'Phone:'}
          placeholder={'+38000000000'}
          formType={'number'}
        />
        <UserDataItem
          id={'user_city'}
          inputName={'City:'}
          placeholder={'Kiev'}
          formType={'text'}
        />
      </form>
    </div>
  );
};

export default UserData;
