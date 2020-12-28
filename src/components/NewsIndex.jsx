import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import NewsCard from "./NewsCard";

const NewsIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsFeed);

  useEffect(() => {
    NewsService.index(dispatch);
  });



  return (
    <>
      <NewsCard />
    </>
  );
};
export default NewsIndex;
