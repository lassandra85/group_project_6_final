import icons from '../../image/icons';

import css from '../Modal/Modal.module.css';


const ModalCongrats = ({toggleModal}) => {
    
  
  return (
    <> 
        <div className={css.congratzContainer}>
              
            <h3> className={css.congratzTitle}
                  
                Congrats!
                  
            </h3>
              
            <p className={css.congratzDescr}>
                  
                You`re registration is success
                  
            </p>

            <button className={css.congratzBtn} type="button" onClick={toggleModal}> 
               
                <p >
                      
                    Go to profile
                      
                </p> 
                  
                <svg width={24} height={24} className={css.svg_pawPrint}>
                      
                    <use href={icons + '#pawprint'} />
                      
                </svg>
               
            </button>
        </div >
            
    </>
  );
};


export default ModalCongrats;
