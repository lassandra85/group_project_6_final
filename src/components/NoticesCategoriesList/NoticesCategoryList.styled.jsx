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

export const Category = styled.p`
position: absolute;
top: 16px;

display: flex;
justify-content: center;
align-items: center;

width: 126px;
max-height: 32px;

padding: 11px 0;

font-size: 14px;
font-family: 500;
line-height: inherit;
color:var(--color-black);

background-color: var(--background_btn-color);
border-radius: 0 16px 16px 0;
`;


export const FavoriteBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background-color: ${({inFavorite})=> inFavorite ? 'blue' : 'light-blue'};

  border: none;
  border-radius: 50%;

  transition: background-color 300ms var(--transition-main);

  &:hover,
  &:focus{
    background-color: var(--color-blue);
  }

  & svg{
    stroke: ${({inFavorite})=>inFavorite ? 'fff' : '#0000ff'};
    transition: stroke 300ms var(--transition-main);
    
  }
  &:hover svg,
  &:focus svg {
    stroke: #fff;
  }
`;
export const  DeleteBtn = styled(FavoriteBtn)`
    top:68px;
    right:12px;
`;


export const InfoWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  padding-bottom:12px;
`;
export const Info = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 4px;

  min-width: 80px;

  padding: 2px 8px;

  font-family: 500;
  font-size: 12px;
  color:var(--color-black);
  background-color: var(--background_btn-color);
  border: none;
  border-radius: 16px;

  & svg{
    stroke:var(--color-blue)
  }
`;
export const AgeInfo = styled(Info)`
color:${({inRange})=>inRange ? "#fff" : "#0000ff"};

background-color:${({inRange})=>inRange ? "blue" : "lightblue" };

& svg {
    stroke: ${({inRange})=>inRange ? "#fff" : "#0000ff"};
}
`;


export const GenderInfo = styled(Info)`
color:${({inRange})=>inRange ? "#fff" : "#000000"};

background-color: ${({inRange})=>inRange ? "blue" : "lightblue" };

& svg{
    stroke: ${({inRange})=>inRange ? "#fff" : "#0000ff"};
}
`;
export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding:20px;
  padding-bottom: 24px;
  background-color: #fff;
  border-radius: 0px 0px 40px 40px;
`;
export const Comments = styled.h3`
  width: 100%;
  height: 66px;
  font-weight: 700;
  font-size: 24px;
  text-align: left;
  overflow: hidden;
`;