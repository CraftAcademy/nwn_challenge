import React, { useState } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Button, Input } from "semantic-ui-react";

const NewsSearch = () => {
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState();
  const fetchArticleSearch = async () => {
    let resultSearch = await NewsService.search(searchResult);
    dispatch({ type: "SET_NEWS_FEED", payload: resultSearch });
  };

  return (
    <>
      <Input
        data-cy="search_input"
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearchResult(event.target.value)}
      />
      <Button  
      data-cy="search_button"
      onClick={fetchArticleSearch}
      >
        Search
      </Button>
     
    </>
  );
}

export default NewsSearch;
