import { AiOutlineHeart } from "react-icons/ai";
import { FiTrash2 } from "react-icons/fi";
import { CiLocationOn,CiClock2 } from "react-icons/ci";
import { BsGenderMale,BsGenderFemale } from "react-icons/bs";
import Leila from 'image/notices_img/Leila.png'
import Lord from 'image/notices_img/Lord.png'
import uniqid from 'uniqid'
import Button from "components/Button/Button";
import {List,
        ListItem,
        ImageWrapper,
        FavoriteBtn,
        DeleteBtn,
        InfoWrapper,
        Info,
        AgeInfo,
        GenderInfo,
        CardFooter,
        Comments,} from './NoticesCategoryList.styled'





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
    avatarURL: Leila,
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
    avatarURL: Lord,
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
    avatarURL: Leila,
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
    avatarURL: Lord,
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
    avatarURL: Leila,
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
    avatarURL: Lord,
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
    avatarURL: Leila,
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
    avatarURL: Lord,
    comments: "Loves to play fetch and swim in the pool. Good with kids and other pets.",
    category: "sell"
}
]

const NoticesCategoriesList = () => {

    
   
    return (
        <List>
           { items.map(pet=>(
                <ListItem key={pet.id}>
                <ImageWrapper bgi={pet.avatarURL}>
                    <p className="Category">{pet.category}</p>
                    <FavoriteBtn>
                        <AiOutlineHeart/> 
                    </FavoriteBtn>
                    {<DeleteBtn>
                            <FiTrash2/>
                    </DeleteBtn>}
                    <InfoWrapper>
                        <Info>
                            <CiLocationOn/>
                            {pet.location}
                        </Info>
                        <AgeInfo>
                            <CiClock2/>
                            1 year
                        </AgeInfo>
                        <GenderInfo>
                           {pet.sex==='male'? <BsGenderMale/>:<BsGenderFemale/>}
                           {pet.sex}
                        </GenderInfo>
                        
                    </InfoWrapper>
                </ImageWrapper>
                <CardFooter>
                    <Comments>Good Friend</Comments>
                    <Button/>
                </CardFooter>
        
            </ListItem>  
           ))}
        </List>
        )
        
      
        
  
}

export default NoticesCategoriesList;