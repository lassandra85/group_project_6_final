import { RxCross2 } from 'react-icons/rx';
import { createPortal } from 'react-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
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
  const location = useLocation();
  const inNoticePage = location.pathname.includes('notices');

  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        toggleModal();
      }
    };

    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [toggleModal]);

  const onModalOpen = event => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };
  return createPortal(
    <>
    <div className="Backdrop" onClick={onModalOpen} inNoticePage={inNoticePage}>
      <div className="ModalWindow">
        <button className="closeBtn">
          <RxCross2 />
        </button>
        {children}
      </div>
    </div>
    </>,
    modalContainer
  );
};

export default Modal;
