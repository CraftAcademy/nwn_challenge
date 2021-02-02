import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard'
import {Grid} from 'semantic-ui-react'


const NewsIndex = () => {

  const { newsFeed } = useSelector(state => state)
  return (
    <Grid columns={3} data-cy="news-display" >
      {newsFeed && newsFeed.map(newsItem => {
        return (
          <NewsCard newsItem={newsItem} />
        )
      })}
    </Grid>
  )
}

export default NewsIndex
