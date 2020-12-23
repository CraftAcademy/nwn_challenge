import axios from 'axios'

const NewsService = {
  async index(dispatch) {
    let result = await axios.get("/top-headlines?country=us&apiKey=0226cdc8350248edb433d7f76eb053bd");
    dispatch({ type: "SET_NEWS_FEED", payload: result.data.articles });
  },

  async search(query) {
    let result = await axios.get(`/everything?q=${query}&apiKey=0226cdc8350248edb433d7f76eb053bd`);
    return result.data.articles;
  }
}

export default NewsService