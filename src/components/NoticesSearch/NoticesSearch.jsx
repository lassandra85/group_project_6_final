import { useState } from 'react';
import { Formik, Form,Field } from 'formik';
import { BsSearch } from "react-icons/bs";
 import { RxCross1 } from "react-icons/rx";
const NoticesSearch = ({onFormSubmit}) => {

    const [query, setQuery] = useState('')   
 
    const handleChange = (values)=>{
        console.log(values)
    }
   const handleSubmit = (values,{resetForm})=>{
    // console.log(values)    
    // onFormSubmit(query);
    resetForm();
   
   }
  
 
  

   
  return (
    <>
      <Formik  initialValues={{query:''}} onSubmit={handleSubmit} onChange={handleChange} >
       { props=>
       <Form>
          <Field
            type="text"
            name="query"
            id="searchQuery"
            placeholder="Search"
            onChange={props.onChange}
          />
          <button type="submit" query={query}>
          <BsSearch/>
          </button>
          <button type="button" onClick={()=>{setQuery('')}} query={query}>
             <RxCross1 /> 
          </button>
        </Form>}
      </Formik>
    </>
  );
};

export default NoticesSearch;
