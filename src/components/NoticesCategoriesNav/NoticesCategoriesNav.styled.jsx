import styled from "styled-components";


export const List = styled.ul`
display: flex;
flex-wrap:wrap;
gap:8px;

@media(min-width:768px){
 gap:12px;   
}

`;

export const Btn = styled.button`
position: relative;

padding: 8px 16px;

color:var(--color-blue);

background-color: var(--background_btn-color);

border:none;

border-radius: 40px;

transition: 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    background-color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

&.active{
    color:var(--color-white);

    background-color: var(--color-blue);

    &::before{
        content: '';
        position: absolute;
        top:0;
        right: 0;

        width:100%;
        height:100%;

        background: linear-gradient(290.46deg, #419EF1 0%,#9BD0FF 107.89%);

        border-radius: 40px;
        opacity:0;

        z-index: -1;

        transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
    }
    &:hover::before,
    &:focus::before{
        opacity: 1;
    }
    
    &:hover,
    &:focus{
        color:var(--color-white);

        background-color: transparent;
    }

}

`;