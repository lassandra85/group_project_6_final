import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 320px;
  padding:64px;

  @media(min-width:768px){
    height:250px;
  }
  `;

  
export const Text = styled.p`
width: 100%;
font-weight: 700;
font-size: 24px;
text-align: center;
@media(min-width:768px){
    font-size: 28px;
  }
`;