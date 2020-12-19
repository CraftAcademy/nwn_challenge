import React from 'react'
import { Header, Card } from 'semantic-ui-react'

const NewsCard = (props) => {
  return (
    // <Card
    //   data-cy={`article-${article.id}`}
    //   header='DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017'
    //   meta={`By: ${'Lorenzo Stroe'} at ${'FXStreet'}`}
    //   description='DBS Bank of Singapore has just announced the launch of a digital asset exchange featuring Bitcoin, Ethereum, Bitcoin Cash, and XRP and several fiat cu'
    //   extra={<Header as='h6'>`Published at ${"2020-12-10T20:29:20Z"}`</Header>}
    // />
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
