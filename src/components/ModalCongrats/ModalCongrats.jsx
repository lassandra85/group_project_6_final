import icons from 'images/icons.svg';

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
               
                <p className={css.congratzBtn}>
                      
                    Go to profile
                      
                </p> 
                  
                <svg className={css.congratzBtn}>
                      
                    <use href={icons + '#pawprint'} className={css.svg_pawPrint} />
                      
                </svg>
               
            </button>
        </div >
            
    </>
  );
};


export default ModalCongrats;
