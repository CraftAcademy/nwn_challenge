import axios from "axios";

const NewsService = {
  async index(dispatch) {
    let result = await axios.get(
      "/top-headlines?country=us&apiKey=927b2e7db95a4867bf270419b3564f9e"
    );
    dispatch({ type: "SET_NEWS_FEED", payload: result.data.articles });
  },

  async search(query) {
    let result = await axios.get(
      `/everything?q=${query}&apiKey=927b2e7db95a4867bf270419b3564f9e`
    );
    return result.data.articles;
  },
};

export default NewsService;
