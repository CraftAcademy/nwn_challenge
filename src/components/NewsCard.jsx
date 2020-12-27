import React from 'react';
import { Image, Card } from 'semantic-ui-react';

const NewsCard = ({
  id,
  urlToImage,
  title,
  author,
  description,
  publishedAt,
}) => {
  return (
    <Card data-cy={`article-${id}`}>
      <Image data-cy="image" src={`${urlToImage}`} />
      <Card.Content>
        <Card.Header data-cy="title">{title}</Card.Header>
        <Card.Description data-cy="description">{description}</Card.Description>
        <Card.Meta data-cy="author">{author}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Card.Meta data-cy="publication-date" as="h6">
          {`Published at ${publishedAt}`}
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default NewsCard;
