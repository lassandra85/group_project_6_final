import styled from 'styled-components';
import { Field } from 'formik';
import { visualyHidden } from '../ChooseForm/visualyHidden';

export const AddFormRadioButton = styled(Field)`
  ${visualyHidden}
`; 

export const AddFormLabelWrapper = styled.div`
  position: relative;
`;

export const AddFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;

  color: var(--color-black);

  @media screen and (min-width: 768px) {
    gap: 8px;
    font-size: 20px;
    line-height: 1.3;
  }
`;

export const AddFormInput = styled(Field)`
  padding: 10px 16px;

  font-size: 14px;
  line-height: 1.5;

  border: 1px solid var(--text-color-blue);
  border-radius: 40px;
  outline-color: var(--text-color-blue);
  transition: outline 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &.invalid {
    border-color: var(--color-red);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    min-width: 394px;
    padding: 12px 16px;
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;

export const MoreInfoFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px 0 24px;
  gap: 20px;

  @media screen and (min-width: 768px) {
    ${({ category }) =>
      category !== 'my-pet' ? 'flex-direction: row; column-gap:44px' : ''};
  }
`;

export const FirstPartFormWrapper = styled.div`
  display: flex;
  ${({ category }) => (category !== 'my-pet' ? 'flex-direction: column;' : '')};
  gap: 20px;

  @media screen and (min-width: 768px) {
    ${({ category }) => (category !== 'my-pet' ? 'row-gap: 38px;' : '')};
  }
`;

export const SecondPartFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const FileInput = styled(Field)`
  ${visualyHidden}
`; 

export const AddFormTextAreaLabel = styled(AddFormLabel)`
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const AddFormTextArea = styled(AddFormInput)`
  resize: none;
  height: 92;
  flex-grow: 1;

  border-radius: 20px;

  @media screen and (min-width: 768px) {
    height: 108px;
  }
`;

export const AddFormSexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  column-gap: 16px;

  @media screen and (min-width: 768px) {
    row-gap: 20px;
  }

  & p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.36;

    color: var(--color-black);

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1.3;
    }
  }
`;

export const AddFormRadioWrapper = styled.div`
  display: inherit;
`;

export const AddFormSexLabel = styled.label`
  display: flex;
  column-count: 12px;
  align-items: center;

  font-size: 16px;
  line-height: 1.5;

  color: #888888;

  cursor: pointer;
  transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: var(--text-color-blue);
  }

  ${AddFormRadioButton}:checked + & {
    color: var(--color-black);
  }
`;

export const AddFormImageLabel = styled(AddFormLabel)`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 28px;

  @media screen and (min-width: 768px) {
    ${({ category }) =>
      category !== 'my-pet' ? 'flex-direction: column' : ''};
  }
`;

export const AddFormImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;

  background-color: var(--background_btn-color);
  border-radius: 20px;
  color: var(--text-color-blue);

  cursor: pointer;
  overflow: hidden;
  object-position: center;
  object-fit: cover;

  & svg {
    stroke: currentColor;
  }

  @media screen and (min-width: 768px) {
    min-width: 182px;
    height: 182px;
  }
`;



