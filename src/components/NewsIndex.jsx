import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsCard from "./NewsCard";
import NewsService from "../modules/NewsService";
import { Card } from "semantic-ui-react";

const NewsIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsFeed);
  const fetchNews = async () => {
    let articles = await NewsService.index();
    dispatch({ type: "SET_NEWS_FEED", payload: articles });
  };

  useEffect(fetchNews, []);

  let articlesDisplay = articles.map((article) => {
    return <NewsCard article={article} />;
  });

  // const searchResult = useSelector((state) => state.searchArticle);
  // debugger

  // let searchResult = specificNews.map((article) => {
  //   return <NewsCard article={article} />;
  // });

  const searchResult = useSelector((state) => state.searchArticle);
  debugger;

  let searchResults = searchResult.map((article) => {
    return <NewsCard article={article} />;
  });

  return (
    <div data-cy='search_result'>
      <Card.Group itemsPerRow={5}>{articlesDisplay}</Card.Group>
      {searchResults}
    </div>
  );
};

export default NewsIndex;
