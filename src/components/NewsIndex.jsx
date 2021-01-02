import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'
import axios from 'axios'
import NewsService from '../modules/NewsService'


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

  return (
    <>
      <NewsCard />
      <div>
        {articlesData.map(article => {
          return (<li key={article.id}>{article.title}</li>)
        })}
      </div>
    </>
  )
}

export default NewsIndex
