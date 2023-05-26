import styled from "styled-components";

export const Filters = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;

margin-top: 20px;

@media(min-width:768px){
    gap:80px;

    margin-top: 40px;
}

@media(min-width:1280px){
    gap:0;

    width: 100%;

   
}
`;