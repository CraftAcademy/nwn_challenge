import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Button, Input } from "semantic-ui-react";

const NewsSearch = () => {
  return (
    <>
    <Input
    type="text"
    data-cy="search_input" 
    />
    <Button 
    type="submit" 
    data-cy="search_button">
        Search
      </Button>
    </>
  );
};

export default NewsSearch;
