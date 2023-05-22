const Modal = ({toggleModal,children}) => {
    return (
        <div className="Backdrop">
            <div className="ModalWindow">
                <button className="closeBtn"></button>
                {children}
            </div>
        </div>
    );
}

export default Modal;