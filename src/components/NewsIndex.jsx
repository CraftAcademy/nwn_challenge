import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'
import axios from 'axios'
import NewsService from '../modules/NewsService'
import { Card } from "semantic-ui-react";



const NewsIndex = () => {
  const [articlesData, setArticlesData] = useState([])
  const getNewsService = async () => {
    let response = await NewsService.index()
    setArticlesData(response)
    console.log(response)
  }
  
  useEffect(() => {
    getNewsService();
  }, []);

  let articleIndex;
  articleIndex = (
    <Card.Group itemsPerRow={5}>
      {articlesData.map((article) => {
        return <NewsCard article={{ ...article }} />;
      })}
    </Card.Group>
  );

  return (
    <>
      <ul>{articleIndex}</ul>

      {/* <NewsCard />
      <div>
        {articlesData.map(article => {
          return (<li key={article.id}>{article.title} { article.author}</li>)
        })}
      </div> */}
    </>
  )
}

export default NewsIndex
