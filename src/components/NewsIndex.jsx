import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewsCard from "./NewsCard";
import NewsService from "../modules/NewsService";
import { Card } from "semantic-ui-react";

const NewsIndex = () => {
  const [articlesData, setArticlesData] = useState([]);
  const getNewsService = async () => {
    let response = await NewsService.index();
    setArticlesData(response);
  };

  useEffect(() => {
    getNewsService();
  }, []);

  let articleIndex;
  articleIndex = (
    <Card.Group itemsPerRow={3}>
      {articlesData.map((article, index) => {
        return <NewsCard article={{ ...article, id: index}} />;
      })}
    </Card.Group>
  );

  return (
    <>
      <ul data-cy="articles-index">{articleIndex}</ul>
    </>
  );
};

export default NewsIndex;
