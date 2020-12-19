import React from "react";
import { useSelector } from "react-redux";
import NewsCard from "./NewsCard";
import { Grid } from "semantic-ui-react";

const NewsIndex = () => {
  return (
    <>
      <Grid>
        <Grid.Row>
          {articles.map((article) => {
            return <NewsCard article={{ ...article }} />;
          })}
        </Grid.Row>
      </Grid>
    </>
  );
};

export default NewsIndex;
