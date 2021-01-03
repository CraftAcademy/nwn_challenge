import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import NewsCard from "./NewsCard";
import { Card } from "semantic-ui-react";

const NewsIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsFeed);

  useEffect(() => {
    NewsService.index(dispatch);
  }, []);

  let articlesDisplay = articles.map((article) => {
    return <NewsCard article={article} />;
  });

  return <Card.Group itemsPerRow={4}>{articlesDisplay}</Card.Group>;
};

export default NewsIndex;
