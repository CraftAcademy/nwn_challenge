import React from 'react'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = ({newsItem}) => {
  return (
    <Card
      image={newsItem.urlToImage}
      header={newsItem.title}
      meta={`By: ${newsItem.author} at ${newsItem.source.name}`}
      description={newsItem.description}
      extra={<Header as='h6'>{`Published at ${newsItem.publishedAt}`}</Header>}

    />
  )
}

export default NewsCard
