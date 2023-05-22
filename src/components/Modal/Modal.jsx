import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import { RxCross2 } from 'react-icons/rx';

import PropTypes from 'prop-types';

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
      <div className="Backdrop" onClick={onBackdropClick} /* inNoticePage={inNoticePage} */ >

        <div className="ModalWindow">

          <button className="closeBtn">
            <RxCross2 className="svg_closeBtn"/>
          </button>
          
          {children}

        </div>

      </div>
    </>,

    modalContainer

  );
};

Modal.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;