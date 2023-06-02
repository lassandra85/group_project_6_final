import { Formik } from 'formik';
import userPhoto from '../../../image/user-photo-default.png';
import styles from './UserData.module.css';
import { BsCheck2 } from 'react-icons/bs';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectError, selectUser } from 'redux/auth/selectors';
import UserDataItem from '../UserDataItem/UserDataItem';
import { userDataValidation } from 'helpers';
import { getUserInfo, updateUser } from 'redux/auth/operations';
import {notify} from 'helpers';

const initReadOnlyValue = {
  name: true,
  email: true,
  birthday: true,
  phone: true,
  city: true,
};

const UserData = () => {
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  console.log(error);
  const dispatch = useDispatch();
  const [state, setState] = useState(user);

  useEffect(() => {
    setState(user);
  }, [user]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [isReadonly, setIsReadonly] = useState(initReadOnlyValue);

  const [inputName, setInputName] = useState('');

  const [btnEditClicked, setBtnEditClicked] = useState(false);

  const handleChangeInput = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onClickButton = e => {
    const { name } = e.target;
    setIsReadonly({ ...isReadonly, [name]: false });
    setBtnEditClicked(true);
    setInputName(name);
  };

  const handleChangeAvatar = e => {
    const { name } = e.target;
    
    setSelectedFile(e.target.files[0]);
    const src = window.URL.createObjectURL(e.target.files[0]);
    
    setState({ ...state, [name]: src });
    setInputName(name);
  };

  const handleUpload = async (e) => {

    if (!selectedFile) {
      notify('error', 'Please select file');
      return;
    }
    const formFile = new FormData();
    formFile.append('avatar', selectedFile); 

   await dispatch(updateUser({ id: state._id, formFile })); 
    await dispatch(getUserInfo());
    setSelectedFile(null);
  };

  const handleSubmit = async e => {
    
    if ((inputName === 'email' && !state.email) || (inputName === 'birthday' && !state.birthday)) {
      notify('error', 'Please fill in the field');
      return
    }
    await dispatch(updateUser({ id: user._id, [inputName]: state[inputName] }));
    setInputName('');
    setIsReadonly(initReadOnlyValue);
    setBtnEditClicked(false);
    await dispatch(getUserInfo());
    notify('error', 'Data entered incorrectly');
  };

  return (
    <Formik validationSchema={userDataValidation}>
      <form
        className={styles.box}
        autoComplete="off"
        encType="multipart/form-data"
      >
        <div className="photo-container">
          <img
            className={styles.photo}
            src={state.avatarURL ? state.avatarURL : userPhoto}
            alt="user"
            width={182}
            height={182}
          />
          <div className={styles.edit}>
            {selectedFile ? (
              <button
                type="button"
                className={styles.buttonUploadHidden}
                onClick={handleUpload}
              >
                <BsCheck2
                  size={24}
                  color="#54ADFF"
                  style={{ pointerEvents: 'none' }}
                />
              </button>
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
                    name="avatarURL"
                    className={styles.inputHidden}
                    onChange={handleChangeAvatar}
                    accept="image/png, image/jpeg"
                    disabled={btnEditClicked}
                  />
                  <label className={styles.labelPhoto} htmlFor="file">
                    Edit Photo
                  </label>
                </>
              )}
            </div>
          </div>
        </div>
        <div className={styles.form}>
          <UserDataItem
            id={'user_name'}
            value={state.name || ''}
            placeholder={'Anna |'}
            name={'name'}
            label={'Name:'}
            onChange={handleChangeInput}
            isReadonly={isReadonly.name}
            onClick={onClickButton}
            disabled={btnEditClicked}
            onSubmit={handleSubmit}
          />
          <UserDataItem
            id={'user_email'}
            value={state.email || ''}
            placeholder={'anna00@gmail.com|'}
            name={'email'}
            label={'Email:'}
            onChange={handleChangeInput}
            isReadonly={isReadonly.email}
            onClick={onClickButton}
            disabled={btnEditClicked}
            onSubmit={handleSubmit}
          />
          <UserDataItem
            id={'user_birthday'}
            value={state.birthday || ''}
            placeholder={'00.00.0000'}
            name={'birthday'}
            label={'Birthday:'}
            onChange={handleChangeInput}
            isReadonly={isReadonly.birthday}
            onClick={onClickButton}
            disabled={btnEditClicked}
            onSubmit={handleSubmit}
          />
          <UserDataItem
            id={'user_phone'}
            value={state.phone || ''}
            placeholder={'+38000000000'}
            name={'phone'}
            label={'Phone:'}
            onChange={handleChangeInput}
            isReadonly={isReadonly.phone}
            onClick={onClickButton}
            disabled={btnEditClicked}
            onSubmit={handleSubmit}
          />
          <UserDataItem
            id={'user_city'}
            value={state.city || ''}
            placeholder={'Kiev'}
            name={'city'}
            label={'City:'}
            onChange={handleChangeInput}
            isReadonly={isReadonly.city}
            onClick={onClickButton}
            disabled={btnEditClicked}
            onSubmit={handleSubmit}
          />
        </div>
      </form>
    </Formik>
  );
};

export default UserData;
