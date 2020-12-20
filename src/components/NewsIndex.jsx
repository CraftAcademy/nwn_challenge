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
	
	const specificNews = useSelector((state) => state.specificNews);
  const fetchArticles = async () => {
		let articles = await NewsService.search();
		debugger
    dispatch({ type: "SEARCH_NEWS", payload: articles });
  };

  useEffect(fetchArticles, []);

  // const specificNews = useSelector((state) => state.specificNews);

  useEffect(fetchNews, []);

  let articlesDisplay = articles.map((article) => {
    return <NewsCard article={article} />;
  });
  return (
    <>
      <Card.Group itemsPerRow={5}>{articlesDisplay}</Card.Group>
      {/* {specificNews} */}
    </>
  );
};

export default NewsIndex;
