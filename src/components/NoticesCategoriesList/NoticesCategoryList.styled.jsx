import styled from "styled-components";

export const List = styled.ul`
display:grid;
grid-template-columns: 1fr;
justify-content: center;
align-items: center;
gap:24px;

@media(max-width: 767px){
    width: 100%;

}

@media(min-width: 768px){
 grid-template-columns: repeat(2,1fr);
 column-gap: 32px;

}

@media(min-width: 1280px){
    grid-template-columns: repeat(4,1fr);

}


`;
export const ListItem = styled.li`
border-radius: 0 0 40px 40px;
box-shadow:var(--box-shadow_main);
transition: box-shadow 300ms var(--transition-main);

&:hover{
    box-shadow: var(--box-shadow_secondary);
}
`;
export const ImageWrapper = styled.div`
  position: relative;

background-image: url(${({ bgi }) => bgi});
background-position: center;
background-size: cover;

max-width: 100%;
height: 288px;
`;

// Category
// FavoriteBtn
// DeleteBtn
// InfoWrapper
// Info
// AgeInfo
// GenderInfo
// CardFooter
// Comments