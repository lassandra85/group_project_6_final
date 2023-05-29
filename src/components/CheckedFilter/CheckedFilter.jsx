import { CrossSmallIcon } from 'utils/icons';
import { Wrapper, Text, Btn } from './CheckedFilter.styled.jsx';

const CheckedFilter = ({ text, clickHandler }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Btn type="button" onClick={clickHandler}>
        <CrossSmallIcon />
      </Btn>
    </Wrapper>
  );
};

export default CheckedFilter;