import styled from 'styled-components';
import { Form } from 'formik';

const padding1 = '20px 74px';
const padding2 = '20px 32px'

export const AddFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 8px 17px;
  width: 100%;
  min-height: 496px;
  background: var(--color-white);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 20px 32px;
    width: fit-content;
    min-width: 458px;
   ;
  }

  @media screen and (min-width: 1280px) {
    padding: ${({ step, category }) =>
      step === 2 && category !== 'my-pet' ? padding1 : padding2};
  }    
`;

export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const AddFormTitle = styled.h1`
  font-family: Manrope;
  padding-left: 12px;
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 1.35;
  text-align: ${({step})=>step===2? 'center': 'start'};

  color: var(--color-black);

    @media screen and (min-width: 768px) {
      font-size: 28px;
  }
`;

export const AddFormList = styled.ul`
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     justify-content: start;
     column-gap: 12px;
     width:100%;
     margin-bottom: 16px;   
     
  @media screen and (min-width: 768px) {
      justify-content: center;
      column-gap: 16px;
      ${props=>console.log(props)}
      padding: ${({ step, category }) =>
      step === 2 && category !== 'my-pet' ? '0 96px' : '0 16px'};
  }
`;

export const AddFormItem = styled.li`
  position: relative;
  padding-bottom: 20px;
  flex-basis: calc((100% - 24px) / 3);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 8px;

    background-color: var(--background_btn-color);
    border-radius: 8px;
  }

  &.current::after {
    background-color: var(--text-color-blue);
  }

  &.completed::after {
    background-color: var(--color-green);
  }

    @media screen and (min-width: 768px) {
      max-width:120px;
      // flex-basis: none;
    }
`;



export const AddFormStepName = styled.p`
  font-family: Manrope;
  font-size: 0.625rem;
  line-height: 1.4;

  color: var(--background_btn-color);

  ${AddFormItem}.current & {
    color: var(--text-color-blue);
  }

  ${AddFormItem}.completed & {
    color: var(--color-green);
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 1.62;
  }
`;

export const AddFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: ${({ category, isMoreInfo }) =>
      category !== 'your-pet' ? 'center' && isMoreInfo : 'end'};
    margin-top: 40px;
    column-gap: 24px;
  }
`;
