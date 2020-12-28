import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewsService from "../modules/NewsService";
import { Button, Input, List } from "semantic-ui-react";

function NewsSearch() {
  
  const dispatch = useDispatch();
  const showArticles = useSelector((state) => state.articleSearch);

  useEffect(() => {
    NewsService.index(dispatch);
  });

    return (
      <>
        <Input type="text" data-cy="search_input" />
        <Button type="submit" data-cy="search_button">
          Search
        </Button>
        <div data-cy="search_results">
          <List>
            <List.Item>{articleSearch}</List.Item>
          </List>
        </div>
      </>
    );
  };

export default NewsSearch;
