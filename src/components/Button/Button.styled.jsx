import styled from 'styled-components';



const Btn = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ short }) =>
    short ? '8px' : '12px'};

  min-width: ${({ short }) => (short ? '129px' : '252px')};
  max-height: 40px;
  padding: 8px 0;

  font-family: 700;
  font-size:16px;
  color: ${({  filled }) =>(
    filled ? '#fff' : '#0000ff')};

  background-color: ${({  filled }) =>
    filled ? 'blue' : 'transparent'};
  border-width: ${({ filled }) => (filled ? 0 : '2px')};
  border-color: var(--color-blue);
  border-style: solid;
  border-radius: 40px;

  z-index: 2;

  transition: color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
     border-color 300ms  cubic-bezier(0.445, 0.05, 0.55, 0.95),
     background-color 300ms  cubic-bezier(0.445, 0.05, 0.55, 0.95);

   &:hover,
   &:focus {
     color: var(--color-white);
     border-color: transparent;
    background-color: ${({ filled }) => filled && 'transparent'};
  }

   &::before {
     content: '';
     position: absolute;
     top: 0;
     right: 0;
     width: 100%;
     height: 100%;
     background:var(--background_gradient);
     border-radius: 40px;
     opacity: 0;
     z-index: -1;
     transition: opacity 300ms ;
   }

   &:hover::before,
   &:focus::before {
     opacity: 1;
   }

   & svg {
     fill: ${({  filled, heart }) =>( filled && !heart ? 'white' : 'blue')};

     stroke: ${({  heart }) => heart && 'white'};

     transition: fill 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
   }

   &:hover svg,
   &:focus svg {
     fill: ${({  heart }) => !heart && 'white'};
   }
 `;

 export { Btn };