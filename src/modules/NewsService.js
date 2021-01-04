import axios from 'axios'

const NewsService = {
  async index() {
    let result = await axios.get('http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=46d03f6d6afb40c993332aa313dab891')
    return result.data.articles
  },

  async search(query) {

  }
}

export default NewsService