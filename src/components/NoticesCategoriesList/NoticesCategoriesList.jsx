import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { CiLocationOn,CiClock2 } from "react-icons/ci";
import { BsGenderMale,BsGenderFemale } from "react-icons/bs";
import Leila from 'image/notices_img/Leila.png'
import Lord from 'image/notices_img/Lord.png'
import uniqid from 'uniqid'
// import Button from "components/Button/Button";
const items = [
    {
    id:uniqid(),
    titleOfAdd: "Looking for good friend",
    name: "Luna",
    birthday: "11.12.2022",
    breed: "Husky",
    location: "Lviv",
    price: 200,
    sex: "female",
    avatarURL: {Leila},
    comments: "Loves to play fetch and swim in the pool. Good with kids and other pets.",
    category: "sell"
},
{   id:uniqid(),
    titleOfAdd: "Looking for good friend",
    name: "Viska",
    birthday: "11.12.2022",
    breed: "Husky",
    location: "Lviv",
    price: 200,
    sex: "female",
    avatarURL: {Leila},
    comments: "Loves to play fetch and swim in the pool. Good with kids and other pets.",
    category: "sell"
},
{   id:uniqid(),
    titleOfAdd: "Looking for good friend",
    name: "Leyla",
    birthday: "11.12.2022",
    breed: "Husky",
    location: "Lviv",
    price: 200,
    sex: "female",
    avatarURL: {Leila},
    comments: "Loves to play fetch and swim in the pool. Good with kids and other pets.",
    category: "sell"
},
{   id:uniqid(),
    titleOfAdd: "Looking for good friend",
    name: "Rex",
    birthday: "11.12.2022",
    breed: "Husky",
    location: "Lviv",
    price: 200,
    sex: "male",
    avatarURL: {Lord},
    comments: "Loves to play fetch and swim in the pool. Good with kids and other pets.",
    category: "sell"
},
 {  id:uniqid(),
    titleOfAdd: "Looking for good friend",
    name: "Lord",
    birthday: "11.12.2022",
    breed: "Husky",
    location: "Lviv",
    price: 200,
    sex: "male",
    avatarURL: {Lord},
    comments: "Loves to play fetch and swim in the pool. Good with kids and other pets.",
    category: "sell"
}
]

const NoticesCategoriesList = () => {

    
   
    return (
        <ul className="List">
           { items.map(pet=>(
                <li className="ListItem" key={pet.id}>
                <div className="ImageWrapper" bgi={pet.avatarURL}>
                    <p className="Category">{pet.category}</p>
                    <button className="FavoriteBtn">
                        <AiOutlineHeart/> {/*HeartIcon*/}  
                    </button>
                    {<button className="DeleteBtn">
                            <FiTrash2/>
                    </button>}
                    <div className="InfoWrapper">
                        <span className="Info">
                            <CiLocationOn/>
                            {pet.location}
                        </span>
                        <span className="AgeInfo">
                            <CiClock2/>
                            1 year
                        </span>
                        <span className="GenderInfo">
                           {pet.sex==='male'? <BsGenderMale/>:<BsGenderFemale/>}
                           {pet.sex}
                        </span>
                        
                    </div>
                </div>
                <div className="CardFooter">
                    <h3 className="Comments">Good Friend</h3>
                    {/* <Button/> */}
                </div>
        
            </li>  
           ))}
        </ul>
        )
        
      
        
  
}

export default NoticesCategoriesList;