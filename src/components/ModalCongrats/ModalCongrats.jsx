import { ReactComponent as PawPrintIcon } from 'image/icons/pawprint.svg';

import css from '../Modal/Modal.module.css';


const ModalCongrats = ({toggleModal}) => {
    
  
  return (
    <> 
        <div className={css.congratzContainer}>
              
            <h3 className={css.congratzTitle}> 
                  
                Congrats!
                  
            </h3>
              
            <p className={css.congratzDescr}>
                  
                You`re registration is success
                  
            </p>

            <button className={css.congratzBtn} type="button" onClick={toggleModal}> 
               
                <p >
                      
                    Go to profile
                      
                </p> 
                  
                <PawPrintIcon className={css['svg_pawPrint']} /> 
               
            </button>
        </div >
            
    </>
  );
};


export default ModalCongrats;
