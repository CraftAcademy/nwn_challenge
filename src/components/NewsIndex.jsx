import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import NewsCard from "./NewsCard";
import { Card, Container } from "semantic-ui-react";

const NewsIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsFeed);

  useEffect(() => {
    NewsService.index(dispatch);
  }, []);

  let articlesDisplay;
  articlesDisplay = (
    <Card.Group itemsPerRow={4}>
      {articles.map((article) => {
        return <NewsCard article={{ ...article }} />;
      })}
    </Card.Group>
  );

  return (
    <>
    {articles.length ? (
      <ul data-cy="article-index">{articlesDisplay}</ul>
    ) : (
      <Container data-cy="empty-index">
        <h1>Sorry, no articles are available right now</h1>
      </Container>
    
    )}
    </>
  )    
};


export default NewsIndex;
