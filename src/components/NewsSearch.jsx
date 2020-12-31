import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input, Button } from "semantic-ui-react";

const NewsSearch = () => {
  return (
    <Input data-cy="search-input" action placeholder="Search...">
      <input/>
      <Button data-cy="search-button">Search</Button>
    </Input>
  );
};

export default NewsSearch;
