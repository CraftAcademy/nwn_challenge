import React from 'react';
import { Image, Card } from 'semantic-ui-react';

const NewsCard = ({
  id,
  imageUrl,
  title,
  author,
  description,
  publishedDate,
}) => {
  return (
    <Card data-cy={`article-${id}`}>
      <Image data-cy="image" wrapped ui={false} src={`${imageUrl}`} />
      <Card.Content>
        <Card.Header data-cy="title">{title}</Card.Header>
        <Card.Description data-cy="description">{description}</Card.Description>
        <Card.Meta data-cy="author">{author}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <p data-cy="publication-date" as="h6">
          {`Published at ${publishedDate}`}
        </p>
      </Card.Content>
    </Card>
  );
};

export default NewsCard;
