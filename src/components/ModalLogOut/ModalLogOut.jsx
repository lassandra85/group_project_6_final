import css from '../ModalLogOut/ModalLogOut.module.css';
import { CiLogout } from 'react-icons/ci';


const ModalLogOut = ({ handleLogOut, toggleModal}) => {

    return (
        
        <div className={css.logOutContainer}>
              
            <h3 className={css.logOutTitle}> 
                  
               Already leaving?
                  
            </h3>

            <div className={css.logOutBtnContainer}>

                <button className={css.cancellogOutBtn} type="button" onClick={toggleModal}> 
               
                    Cancel
                      
                </button>

                <button className={css.yeslogOutBtn} type="button" onClick={handleLogOut}> 
          
                    Yes
                      
                    <CiLogout size={24} className={css.yeslogOutSvg} />
                      
                </button>
            </div>
        </div >
    );
}

export default ModalLogOut;