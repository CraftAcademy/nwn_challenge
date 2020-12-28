import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NewsCard from './NewsCard'
import axios from 'axios'

const NewsIndex = () => {
  const dispatch = useDispatch()
  const newsFeed = useSelector(state => state.newsFeed)
  const fetchArticles = async () => {
    let newsFeed = await axios.get('https://newsapi.org/v2/top-headlines?country=se')
    dispatch({type: "SET_NEWS_FEED", payload: newsFeed.data.data })
  }

  useEffect(fetchArticles, [])
  
  return (
    <>
    {newsFeed && newsFeed.map(newsFeed => {
      return (
        <NewsCard />
      )
    })
     
    </>
  )
}

export default NewsIndex
