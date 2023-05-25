import css from '../ModalDelete/ModalDelete.module.css';
import icons from 'images/icons.svg';


const ModalDelete = ({ id, toggleModal}) => {

    return (
        
        <div className={css.deleteContainer}>
              
            <h3> className={css.deleteTitle}
                  
                Delete your pet?
                  
            </h3>
              
            <p className={css.deleteDescr}>
                  
                Are you sure you want to delete <span className={css.deleteName}>“{id}”?</span> You can`t undo this
                action.
                  
            </p>

            <div className={css.deleteBtnContainer}>

                <button className={css.cancelDeleteBtn} type="button" onClick={toggleModal}> 
               
                    Cancel
                      
                </button>

                <button className={css.yesDeleteBtn} type="button" onClick={toggleModal}> 
          
                    Yes
                      
                    <svg width={24} height={24} className={css.yesDeleteSvg}>
                      
                        <use href={icons + '#delete'} />
                      
                    </svg>
               
                </button>
            </div>
        </div >
    );
}

export default ModalDelete;