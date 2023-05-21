import { useState } from 'react';
import { BiEditAlt } from 'react-icons/bi';
import { BsCheck2 } from 'react-icons/bs';
import styles from './UserDataItem.module.css';

const UserDataItem = ({ id, inputName, placeholder }) => {
  const [isReadonly, setIsReadonly] = useState(true);
  const [value, setValue] = useState('');
  
  const handleChangeInput = (e) => {
setValue(e.target.value)
  }

  return (
    <div className={styles.field}>
      <label className={styles.text} htmlFor={id}>
        {inputName}
      </label>
      <div className={styles.wrapper}>
        <input
          type="text"
          className={styles.input}
          id="user_name"
          placeholder={placeholder}
          readOnly={isReadonly}
          onChange={handleChangeInput}
        />
        {isReadonly ? (
          <BiEditAlt
            type="button"
            onClick={() => {
              setIsReadonly(prevState => !prevState);
              setValue(prevState => '');
            }}
            style={{
              position: 'absolute',
              right: '12px',
              top: '1px',
              fill: '#54ADFF',
              cursor: 'pointer',
            }}
            size={24}
          />
        ) : (
          <BsCheck2
            type="button"
            onClick={() => setIsReadonly(prevState => !prevState)}
            // onSubmit={}
            color={value.length > 5 ? '#00C3AD' : '#888888'}
            size={24}
            style={{
              position: 'absolute',
              right: '12px',
              top: '3px',
              cursor: 'pointer',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default UserDataItem;
