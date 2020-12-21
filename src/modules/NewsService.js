import axios from "axios";

const NewsService = {
  async index() {
    let topHeadlines = await axios.get(
      "https://newsapi.org/v2/top-headlines?category=technology&apiKey=1f8621c526294f2993a444449194a9de"
    );
    return formatResponse(topHeadlines);
  },

  async search(query) {
    let searchResult = await axios.get(
      `https://newsapi.org/v2/top-headlines?q=${query}&category=technology&apiKey=1f8621c526294f2993a444449194a9de`
    );
    return formatResponse(searchResult);
  },
};

const formatResponse = (response) => {
  response = response.data.articles.map((article) => {
    return {
      id: response.data.articles.indexOf(article) + 1,
      title: article.title,
      published_at: article.publishedAt,
      description: article.description,
      url: article.url,
      image: article.urlToImage,
    };
  });
  return response;
};

export default NewsService;
