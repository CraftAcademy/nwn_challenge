import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card } from 'semantic-ui-react';
import NewsService from '../modules/NewsService'
import NewsCard from './NewsCard'


const NewsIndex = () => {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.newsFeed)

  useEffect(() => {
    NewsService.index(dispatch)
  },
  [])

  let articleDisplay = articles.map((article) => {
    return <NewsCard article={article} />
  })
  return <Card.Group
    itemPerRow={3}
  >{articleDisplay}</Card.Group>

}

export default NewsIndex;
