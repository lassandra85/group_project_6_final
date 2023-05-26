import styled from 'styled-components';

const Form = styled.form`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  margin-top:24px;

  @media screen and (min-width:768px) {
    width: 608px;
    margin-top: 40px;
  }

  
`;

const Input = styled.input`
  width: 100%;
  max-height: 44px;
  padding-top: 14px;
  padding-bottom: 15px;
  padding-left: 20px;

 
  color:var(--color-grey);

  background-color: #fff;
  border-radius: 24px;
  border: none;
  box-shadow:3px 8px 14px rgba(136, 198, 253, 0.19);
  outline: none;

  transition: box-shadow 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:focus,
  &:hover {
    box-shadow:7px 13px 14px rgba(116,177,232,0.24);
  }

  
`;

const SubmitBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  transform: ${({ query }) => query && 'translateX(-27px)'};

  transition: transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  & svg {
    fill: var(--color-blue);
  }
`;

const CleareUpBtn = styled(SubmitBtn)`
  right: 13px;

  transform: translateX(0);
  opacity: ${({ query }) => (query ? 1 : 0)};

  transition: opacity 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);

  & svg {
    stroke: var(--color-yellow);
  }
`;

export { Form, Input, CleareUpBtn, SubmitBtn };