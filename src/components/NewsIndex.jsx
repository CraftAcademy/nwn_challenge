import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NewsService from "../modules/NewsService";
import NewsCard from "./NewsCard";

const NewsIndex = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const articlesData = await NewsService.index();
      setArticles(articlesData.articles);
    };
    getArticles();
  }, []);

  return (
    <div data-cy="index">
      {articles.map((article, index) => {
        return <NewsCard {...article} id={index} />;
      })}
    </div>
  );
};

export default NewsIndex;
