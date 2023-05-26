import NoticesCategoriesNav from "components/NoticesCategoriesNav/NoticesCategoriesNav";
import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import Title from "components/Title/Title";

import { VscArrowLeft } from "react-icons/vsc";
import { Filters } from "./NoticesPage.styled";
import AddPetBtn from "components/AddPetBtn/AddPetBtn";



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
                <AddPetBtn/>
            </Filters>
            <button><VscArrowLeft/></button>
        </div>
    );
}

export default NoticesPage;