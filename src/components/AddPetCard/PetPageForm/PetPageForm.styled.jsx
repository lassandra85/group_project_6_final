import styled from 'styled-components';
import { Form } from 'formik';

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
  }

  @media screen and (min-width: 1280px) {
    padding: ${({ step, category }) =>
      step === 2 && category !== 'my-pet' ? '20px 74px' : '20px 32px'};
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

  color: var(--color-black);

    @media screen and (min-width: 768px) {
      font-size: 28px;

  }

`;

export const AddFormList = styled.ul`
  display: flex;
  column-gap: 12px;
  margin-bottom: 16px;
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
`;

export const AddFormStepName = styled.p`
  font-family: Manrope;
  font-size: 10px;
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
