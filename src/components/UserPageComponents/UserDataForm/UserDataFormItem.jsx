import styles from './UserDataForm.module.css';
import { BiEditAlt } from 'react-icons/bi';
import { BsCheck2 } from 'react-icons/bs';

const UserDataFormItem = ({
  id,
  value,
  name,
  placeholder,
  label,
    onChange,
    isReadonly,
    onClick,
  disabled
}) => {

  return (
    <div className={styles.field}>
      <label className={styles.text} htmlFor={id}>
        {label}
      </label>
      <div className={styles.wrapper}>
        <input
          type="text"
          className={styles.input}
          id={id}
          placeholder={placeholder}
          name={name}
          value={value}
          readOnly={isReadonly}
          onChange={onChange}
          required={name === 'name' || name === 'birthday' ? true : false} //убрать при подключенной валидации йап
        />
        {isReadonly ? (
          <button
            type="button"
            disabled={disabled}
            onClick={onClick}
            name={name}
            className={styles.buttonHidden}
          >
            <BiEditAlt
              style={{
                fill: '#54ADFF',
                pointerEvents: 'none',
              }}
              size={24}
            />
          </button>
        ) : (
          <button type="submit" className={styles.buttonHidden}>
            <BsCheck2
              color="#00C3AD" //value.length > 5 ? '#00C3AD' : '#888888'
              size={24}
              style={{
                pointerEvents: 'none',
              }}
            />
          </button>
        )}
      </div>
    </div>
  );
};
export default UserDataFormItem;
