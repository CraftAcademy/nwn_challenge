import axios from 'axios';

const API_URL = 'http://newsapi.org/v2';
const API_KEY = 'd8ea72a213734633abb2150dcfe09b51';

const NewsService = {
  async index() {
    const response = await axios.get(
      `${API_URL}/top-headlines` + 
      '?language=en' + 
      `&apiKey=${API_KEY}`
    );
    return response.data;
  },

  async search(query) {
    const response = await axios.get(
      `${API_URL}/everything` +
        `?q=${query}` +
        '&sortBy=popularity' +
        '&language=en' +
        `&apiKey=${API_KEY}`
    );
    return response.data;
  },
};

export default NewsService;
