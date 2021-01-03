import axios from "axios";

const API_URL = 'https://newsapi.org/v2';
const API_KEY = "dae7714c2de74ce1b1c383440f50a9e9"

const NewsService = {
  async index() {
    let result = await axios.get(
      `${API_URL}/top-headlines` + 
      '?language=en' + 
      `&apiKey=${API_KEY}`
    );
    return result.data.articles;
  },

  async search(query) {},
};

export default NewsService;
