import axios from "axios";

const API_URL = "https://newsapi.org/v2";
const API_KEY = "6e59c12289fd40c69be3a334bd15f076";

const NewsService = {
  async index() {
    let result = await axios.get(
      `${API_URL}/top-headlines` + "?language=en" + `&apiKey=${API_KEY}`
    );
    return result.data.articles;
  },

  async search(idFromButtonClick) {
    const result = await axios.get(
      `http://newsapi.org/v2/everything?q=${idFromButtonClick}&language=en&apiKey=6e59c12289fd40c69be3a334bd15f076`
    );
    return result.data.articles;
  },
};

export default NewsService;
