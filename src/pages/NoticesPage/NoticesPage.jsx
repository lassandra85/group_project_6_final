import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import Title from "components/Title/Title";

import { VscArrowLeft } from "react-icons/vsc";
import { Filters } from "./NoticesPage.styled";
import AddPetBtn from "components/AddPetCard/AddPetButton/AddPetBtn";
import NoticesCategoriesList from "components/NoticesCategoriesList/NoticesCategoriesList";



const NoticesPage = () => {

    const onFormSubmit =query=>{
        console.log(query)
    }

    return (
        <div>
            <Title text = 'Find your favorite pet'/>
            <NoticesSearch onFormSubmit={onFormSubmit}/>
            <Filters>
                <NoticesCategoriesNav/>
                <AddPetBtn isfixed='true'/>
            </Filters>
            <div className="ListContainer">
                <NoticesCategoriesList/>
            </div>
            <button><VscArrowLeft/></button>
        </div>
    );
}

export default NoticesPage;