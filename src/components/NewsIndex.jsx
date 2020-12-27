import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NewsCard from './NewsCard'
import axios from 'axios'

const NewsIndex = () => {
  const fetchArticles = async () => {
    let articles = await axios.get('http://newsapi.org/v2/top-headlines?')
    debugger
  }

  useEffect(fetchArticles, [])
  
  return (
    <>
      <NewsCard />
    </>
  )
}

export default NewsIndex
