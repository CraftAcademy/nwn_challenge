import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input, Button } from "semantic-ui-react";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState();
  const onHandleSubmit = async () => {
    let searchResult = await NewsService.search(searchInput);
    dispatch({ type: "SET_NEWS_FEED", payload: searchResult });
  };
  return (
    <Input
      data-cy="search-input"
      action
      placeholder="Search..."
      onChange={(e) => setSearchInput(e.target.value)}
    >
      <input />
      <Button data-cy="search-button" onClick={onHandleSubmit}>
        Search
      </Button>
    </Input>
  );
};

export default NewsSearch;
