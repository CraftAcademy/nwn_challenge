import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'


const NewsIndex = () => {
  return (
    <div data-cy='news-feed'>
      <NewsCard />
    </div>
  )
}

export default NewsIndex
