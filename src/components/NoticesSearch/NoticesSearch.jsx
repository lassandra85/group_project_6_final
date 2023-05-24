// import { SearchIcon, CrossIcon } from 'shared/utils/icons';
import { useState, useEffect } from 'react';
import {RxCross2} from "react-icons/rx";
import {BsSearch} from "react-icons/bs";
import {Form,
        Input,
        SubmitBtn,
        CleareUpBtn} from './NoticesSearch.styled'


const NoticesSearch = ({ onFormSubmit }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!query) onFormSubmit(query);
  }, [onFormSubmit, query]);


  const submitHandler = e => {
    e.preventDefault();

    onFormSubmit(query);
  };

  const onInputChange = e => {
    const searchQuery = e.target.value;

    setQuery(searchQuery);
  };

  return (
    <Form  onSubmit={submitHandler}>
      <Input 
        type="text"
        name="query"
        id="searchQquery"
        onChange={onInputChange}
        value={query}
        placeholder="Search"
      />
      <SubmitBtn  type="submit" query={query}>
        <BsSearch />
      </SubmitBtn>
      <CleareUpBtn type="button" onClick={() => setQuery('')} query={query}>
        <RxCross2 />
      </CleareUpBtn>
    </Form>
  );
};


export default NoticesSearch;


