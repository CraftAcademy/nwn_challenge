import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsCard from "./NewsCard";
import { Grid } from "semantic-ui-react";
import NewsService from "../modules/NewsService";

const NewsIndex = () => {
  const dispatch = useDispatch()
  const articles = useSelector(state => state.newsFeed)
  const fetchArticles = async () => {
    let articles = await NewsService.index()
    dispatch({ type: "SET_NEWS_FEED", payload: articles.data.data })
  }

  useEffect(fetchArticles, [])
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
