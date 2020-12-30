import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsService from "../modules/NewsService";
import { Button, Input, List } from "semantic-ui-react";

function NewsSearch() {
  const dispatch = useDispatch();
  const [searchResult, setSearchResult] = useState()
  const fetchArticleSearch = async () => {
    let articlesResult = await NewsService.search(searchResult)
    dispatch({ type: "SET_NEWS_FEED", payload: articlesResult })
  }

    return (
      <>
        <Input type="text" data-cy="search_input" />
        <Button type="submit" data-cy="search_button">
          Search
        </Button>
        <div data-cy="search_results">
          <List>
            <List.Item>{showArticles}</List.Item>
          </List>
        </div>
      </>
    );
  };

export default NewsSearch;
