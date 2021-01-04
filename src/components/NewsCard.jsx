import React from 'react'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = (props) => {
  return (
    <Card data-cy={`article-${article.id}`}>
      <Card.Content>
        <Card.Header data-cy="article-title">
          {article.title}
        </Card.Header>
        <Card.Description data-cy="article-desc">
          {article.description}
        </Card.Description>
        <Card.Meta data-cy="article-meta">
          By: {article.author} at {article.source.name}
        </Card.Meta>
        <Card.Extra data-cy="article-extra">
          Published at {article.publishedAt}
        </Card.Extra>
      </Card.Content>
    </Card>
    
  )
}

export default NewsCard
