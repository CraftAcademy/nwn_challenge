import React from 'react'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = ({ article }) => {
  return (
    <Card
      data-cy='news-index'
      image='https://editorial.fxstreet.com/images/Markets/Currencies/Digital%20Currencies/Bitcoin/bitcoins-52602600_Large.jpg'
      header={article.title}
      meta={`By: ${article.author} at ${article.source.name}`}
      description={article.description}
      extra={<Header as='h6'>`Published at ${article.publishedAt}`</Header>}

    />
  )
}

export default NewsCard
