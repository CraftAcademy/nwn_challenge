import React from 'react'
import { useSelector } from "react-redux";
import { Card, Image, Icon } from 'semantic-ui-react'

const NewsCard = () => {
  const articles = useSelector(state => state.newsFeed.articles)

  return (
    <>
      { articles && (
        <Card.Group itemsPerRow="4" >
          {articles.map(article => {
            return (
              <Card key={article.id} data-cy={`article-${article.id}`} >
                <Image
                  src={`${article.image}`}
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png" }}
                />
                <Card.Content>
                  <Card.Header>{article.title}</Card.Header>
                  <Card.Meta>{article.published_at}</Card.Meta>
                  <Card.Description>{article.description}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a href={article.url}>
                    <Icon name='newspaper outline' />Read more</a>
                </Card.Content>
              </Card>
            )
          })}
        </Card.Group>
      )
      }
    </>
  )
}

export default NewsCard
