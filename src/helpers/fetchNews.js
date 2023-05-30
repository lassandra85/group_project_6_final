import axios from 'axios';

axios.defaults.baseURL = 'https://pets-rest-api.onrender.com/'

const fetchNews = async params => {

  console.log(params);
  
  try {

    const response = await axios.get('/news', {

      params,
    });

    return response.data.body;

  } catch (e) {
    
    return console.log(e.massage);
  }
};

export default fetchNews;