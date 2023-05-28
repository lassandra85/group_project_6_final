import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Btn = styled(Link)`
  ${({ isfixed }) => (isfixed ? 'position: fixed;top: 460px;right: 20px;' : '')}

  display: flex;
  flex-direction: ${({ isfixed }) => (isfixed ? 'column' : 'row-reverse')};
  align-items: center;
  justify-content: center;
  gap: 8px;

  width: ${({ isfixed }) => (isfixed ? '80px' : '129px')};
  height: ${({ isfixed }) => (isfixed ? '80px' : '40px')};
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;

  font-family: Manrope;
  font-size: ${({ isfixed }) => isfixed ? '12px' : '16px'};
  color: var(--color-white);

  background-color: var(--color-blue);
  border-radius: ${({ isfixed }) => (isfixed ? '50%' : '40px')};
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  z-index: 1;

  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: transparent;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(290.46deg, var(--color-gradient_blue) 0%, #9BD0FF 107.89%);
    border-radius: 40px;
    opacity: 0;

    z-index: -1;

    transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  & svg {
    stroke: var(--color-white);
  }

  @media  (min-width: 768px) {
    position: static;
    translate: 0 0;

    flex-direction: row;
    gap: 8px;

    width: 134px;
    height: 40px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 20px;
    padding-right: 20px;

    font-family: Manrope;
    font-size: 16px;

    border-radius: 40px;
  }
`;

export { Btn };
