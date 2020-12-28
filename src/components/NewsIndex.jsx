import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NewsService from '../modules/NewsService'
import NewsCard from './NewsCard'


const NewsIndex = () => {
  useEffect(() => {
    NewsService.index(dispatch)
  })

  const dispatch = useDispatch()

  return (
    <>
      <NewsCard />
    </>
  )
}

export default NewsIndex
