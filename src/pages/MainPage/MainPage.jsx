import css from "./MainPage.module.css" 
const MainPage = () => {
    return (
        <div className={css.mainContainer}>
            
            <h1 className={css.mainTitle}>Take good care of your small pets</h1>
            <ul className={css.imageContainer}>
               <li className={css.imageOne}></li>
               <li className={css.imageTwo}></li>
               <li className={css.imageThree}></li>
            </ul>
        </div>
    );
}

export default MainPage;