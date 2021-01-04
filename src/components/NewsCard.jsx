import React from "react";
import { Header, Card } from "semantic-ui-react";

const NewsCard = ({ props }) => {
  return (
    <Card
      data-cy="articleCard"
      key={props.id}
      image={props.urlToImage}
      header={props.title}
      meta={`By: ${props.author} at ${props.source.name}`}
      description={props.description}
      extra={<Header as="h6">{`Published at: ${props.publishedAt}`}</Header>}
    />
  );
};

export default NewsCard;
