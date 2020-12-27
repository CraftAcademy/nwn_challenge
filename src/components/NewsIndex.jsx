import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from 'semantic-ui-react';
import NewsService from '../modules/NewsService';
import NewsCard from './NewsCard';

const NewsIndex = () => {
  const dispatch = useDispatch();
  const newsFeed = useSelector((state) => state.newsFeed);

  useEffect(() => {
    const getArticles = async () => {
      const articlesData = await NewsService.index();
      dispatch({ type: 'SET_NEWS_FEED', payload: articlesData.articles });
    };
    getArticles();
  }, [dispatch]);

  return (
    <Card.Group data-cy="index">
      {newsFeed.map((article, index) => {
        return <NewsCard {...article} id={index} />;
      })}
    </Card.Group>
  );
};

export default NewsIndex;
