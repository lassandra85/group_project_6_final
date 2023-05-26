import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
const NoticesCategoriesList = () => {
    return (
        <ul className="List">
            <li className="ListItem">
                <div className="ImageWrapper">
                    <p className="Category"></p>
                    <button className="FavoriteBtn">
                        <AiOutlineHeart/> {/*HeartIcon*/}
                        {<button className="DeleteBtn">
                            <FiTrash2/>
                        </button>}
                    </button>
                </div>

            </li>
        </ul>
    );
}

export default NoticesCategoriesList;