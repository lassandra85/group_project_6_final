import icons from '../../image/icons';

import css from './ErrorPage.module.css';

const ErrorPage = ({ toggleError }) => {
  return (
    <div className={css.container}>
      <h2 className={css.header}>Ooops! This page not found :(</h2>
      <ul className={css.imageContainer}>
        <li className={css.image4Left}></li>
        <li className={css.imageCat}></li>
        <li className={css.image4Right}></li>
      </ul>
      <button type="button" className={css.bttnMain}>
        <p>To main page</p>
        <svg width={24} height={24} className={css.svg_pawPrint}>
          <use href={icons + '#pawprint'} />
        </svg>
      </button>
    </div>
  );
};

export default ErrorPage;
