import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NewsCard from './NewsCard'
import axios from 'axios'

const NewsIndex = () => {
  // const dispatch = useDispatch()
  // const articles = useSelector(state => state.articles)
  // const fetchArticles = async () => {
  //   let newsFeed = await axios.get('https://newsapi.org/v2/top-headlines?country=se')
  //   dispatch({type: "SET_NEWS_FEED", payload: newsFeed.data.data })
 

  // useEffect(fetchArticles, [])
  
  return (
    <>
  
      
        <NewsCard />
  
     
    </>
  )
}

export default NewsIndex
