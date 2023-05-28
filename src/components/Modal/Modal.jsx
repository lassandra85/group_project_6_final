import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { RxCross2 } from 'react-icons/rx';

// import PropTypes from 'prop-types';

import css from '../Modal/Modal.module.css';

/* import { useLocation } from 'react-router-dom'; */

const modalContainer = document.getElementById('modal-root');

//додати у батьківський компонент (сторінку) наступний код:
// - state:
// const [isModalOpen, setIsModalOpen] = useState(false);

// - функцію:
// const toggleModal = () => {
//   setIsModalOpen(prevState => !prevState);
// };

// - приклад використання:
// {isModalOpen && (
//     <Modal toggleModal={toggleModal}>
//       {children}
//     </Modal>
//   );}

const Modal = ({ toggleModal, children }) => {
  /* const location = useLocation();
  const inNoticePage = location.pathname.includes('notices'); */

  useEffect(() => {

    const onKeyDown = event => {

      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };

  }, [toggleModal]);
  

  const onBackdropClick = event => {

    if (event.target === event.currentTarget) {
      toggleModal();
    }

  };


  return createPortal(
    <>
      <div className={css.backdrop} onClick={onBackdropClick} >

        <div className={css.modalWindow}>

          <button className={css.closeBtn} onClick={toggleModal}>
            <RxCross2 className={css.svg_closeBtn}/>
          </button>
          
          {children}

        </div>

      </div>
    </>,

    modalContainer

  );
};

// Modal.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   children: PropTypes.node,
// };

export default Modal;