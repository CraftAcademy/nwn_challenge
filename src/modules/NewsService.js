import axios from "axios";

const NewsService = {
  async index() {
    const response = await axios.get(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=123"
    );
    return response.data;
  },

  async search(query) {},
};

export default NewsService;
