import axios from 'axios'

const NewsService = {
  async index(dispatch) {
    let articleList = await axios.get('http://newsapi.org/v2/top-headlines?country=se&apiKey=b5a199448e1e41aa8a7246456761f092')
    dispatch({ type: "SET_NEWS_FEED", payload: articleList.data.articles })
  },

  async search(query) {
    let searchResult = await axios.get(`http://newsapi.org/v2/top-headlines?country=se&apiKey=b5a199448e1e41aa8a7246456761f092&q=${query}`)
    return searchResult.data.articles
  }
}

export default NewsService