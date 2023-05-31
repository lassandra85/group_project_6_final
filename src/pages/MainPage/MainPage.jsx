import Container from "components/Container/Container";
import { ImageContainer, MainContainer,MainTitle,ImageOne,ImageTwo,ImageThree } from "./MainPage.styled";


const MainPage = () => {
    return (
       <Container>
         <MainContainer>
            
            <MainTitle>Take good care of your small pets</MainTitle>
            <ImageContainer>
               <ImageOne alt="dog"></ImageOne>
               <ImageTwo alt="dog"></ImageTwo>
               <ImageThree alt="dog"></ImageThree>
            </ImageContainer>
        </MainContainer>
       </Container>
    );
}

export default MainPage;