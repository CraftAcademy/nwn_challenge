import axios from "axios";

const NewsService = {
  async index(dispatch) {
    let response = await axios.get(
      "/top-headlines?country=se&apiKey=48fd0dea52e94e779588814f143e8e88"
    );
    dispatch({ type: "SET_NEWS_FEED", payload: response.data.articles });
  },

  // async search(query) {
  //   let articleSearch = await axios.get(
  //     "https://newsapi.org/v2/everything?country=se&apiKey=48fd0dea52e94e779588814f143e8e88"
  //   );
  //   dispatchEvent({
  //     type: "SEARCH_ARTICLES",
  //     payload: articleSearch.data.articles,
  //   });
  // },
};

export default NewsService;
