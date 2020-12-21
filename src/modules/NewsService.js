import axios from "axios";

const NewsService = {
  async index() {},

  async search(query) {
    let searchResult = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=${query}&category=technology&apiKey=1f8621c526294f2993a444449194a9de`
    );
    searchResult = searchResult.data.articles.map((article) => {
      return {
        id: searchResult.data.articles.indexOf(article) + 1,
        title: article.title,
        published_at: article.publishedAt,
        description: article.description,
        url: article.url,
        image: article.urlToImage,
      };
    });
    return searchResult;
  },
};

export default NewsService;
