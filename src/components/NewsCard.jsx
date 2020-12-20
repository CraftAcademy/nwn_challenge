import React from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

const NewsCard = (props) => {
  return (
    <Card data-cy='news-card'>
      <Image src='https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2020/11/call-of-duty-black-ops-cold-war-vietnam.jpg' />
      <Card.Content>
        <Card.Header>Take $15 off Call of Duty Black Ops Cold War for Xbox One or Xbox Series X at Best Buy - Windows Central</Card.Header>
        <Card.Meta>Published at 2020-12-20</Card.Meta>
        <Card.Description>Get it for $44.99 on the last gen Xbox One or PlayStation 4 or $54.99 on Xbox Series X or PlayStation 5 consoles. This is the standard edition of the game, and the sale price is part of Best Buy's deals of the day so it is only good for today.</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href='https://www.windowscentral.com/take-15-call-duty-black-ops-cold-war-xbox-one-or-xbox-series-x-best-buy'>
          <Icon name='newspaper outline' />Read more</a>
      </Card.Content>
    </Card>
  )
}

export default NewsCard
