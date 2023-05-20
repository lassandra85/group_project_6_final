import NoticesSearch from "components/NoticesSearch/NoticesSearch";
import Title from "components/Title/Title";
import { VscArrowLeft } from "react-icons/vsc";


const NoticesPage = () => {
    return (
        <div>
            <Title text = 'Find your favorite pet'/>
            <NoticesSearch/>
            <button><VscArrowLeft/>Cancel</button>
        </div>
    );
}

export default NoticesPage;