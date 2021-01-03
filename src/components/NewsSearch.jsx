import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input } from "semantic-ui-react";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState();
  const fetchArticles = async () => {
    let specificNews = await NewsService.search(inputValue);
    dispatch({ type: "SEARCH_NEWS", payload: specificNews });
  };

  useEffect(fetchArticles, []);

  return (
    <>
      <Input
        action="Search"
        placeholder="Search..."
        data-cy="search_input"
        onChange={(event) => setInputValue(event.target.value)}
        onClick={fetchArticles}
      />
    </>
  );
};

export default NewsSearch;
