import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card, Image, Icon } from 'semantic-ui-react'

const NewsCard = () => {
  const [articles, setArticles] = useState()
  const fetchTopHeadlines = async () => {
    let topHeadlines = await axios.get("https://newsapi.org/v2/top-headlines?category=technology&apiKey=1f8621c526294f2993a444449194a9de")
    topHeadlines = topHeadlines.data.articles.map(article => {
      return {
        id: topHeadlines.data.articles.indexOf(article) + 1,
        title: article.title,
        published_at: article.publishedAt,
        description: article.description,
        url: article.url,
        image: article.urlToImage
      }
    })
    setArticles(topHeadlines)
  }
  useEffect(fetchTopHeadlines, [])

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
