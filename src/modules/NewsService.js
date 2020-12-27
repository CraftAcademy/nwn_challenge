import axios from "axios";

const NewsService = {
  async index() {
    const response = await axios.get(
      "http://newsapi.org/v2/top-headlines?country=us&apiKey=d8ea72a213734633abb2150dcfe09b51"
    );
    return response.data;
  },

  async search(query) {},
};

export default NewsService;
