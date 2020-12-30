import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsService from "../modules/NewsService";
import { Button, Input, List } from "semantic-ui-react";

function NewsSearch() {
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState();
  const fetchArticleSearch = async () => {
    let articlesResult = await NewsService.search(searchResult);
    dispatch({ type: "SET_NEWS_FEED", payload: articlesResult });
  };

  return (
    <>
      <Input
        data-cy="search_input"
        type="text"
        placeholder="Search..."
        onBlur={(event) => setSearchResult(event.target.value)}
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
