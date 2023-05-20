import { Formik, Form,Field } from 'formik';

const NoticesSearch = () => {

   const handleSubmit = (values,actions)=>{
    console.log(values)
    console.log(actions)
   }
   
  return (
    <>
      <Formik  initialValues={{query:''}} onSubmit={handleSubmit}>
        <Form>
          <Field
            type="text"
            name="query"
            id="searchQuery"
            value=''
            placeholder="Search"
          />
          <button type="submit">
            {/* <SearchIcon /> */}
          </button>
          <button type="button">
            {/* <CrossIcon /> */}
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default NoticesSearch;
