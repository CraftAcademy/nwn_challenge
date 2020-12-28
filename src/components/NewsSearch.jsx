import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Button, Input, List } from "semantic-ui-react";
import axios from "axios";

function NewSearch() {
  const [article, getArticle] = useState();

  const setInputValue = e => {
    getArticle
  }
  const searchArticle = async = async () => {
   let newsFeed = await axios.get('https://newsapi.org/v2/everything?country=se')
  return (
    <>
      <Input type="text" data-cy="search_input" />
      <Button type="submit" data-cy="search_button">
        Search
      </Button>
      <div data-cy="search_results">
        <List>
          <List.Item>{displayArticles}</List.Item>
        </List>
      </div>
    </>
  );
}

export default NewsSearch;
