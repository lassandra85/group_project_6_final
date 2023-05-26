import styled from 'styled-components';
import { Field } from 'formik';

export const PersonalFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px 0 24px;
  gap: 20px;
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

  border: 1px solid var(--color-blue);
  border-radius: 40px;
  outline-color: var(--color-blue);
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
