import axios from "axios";

const NewsService = {
  async index() {
    let result = await axios.get(
      "http://newsapi.org/v2/top-headlines?" +
        "country=no&" +
        "apiKey=dae7714c2de74ce1b1c383440f50a9e9"
    );
    return result.data.articles;
  },

  async search(query) {},
};

export default NewsService;
