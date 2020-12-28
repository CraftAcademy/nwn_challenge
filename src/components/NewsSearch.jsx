import React from 'react';
import { useDispatch } from 'react-redux';
import NewsService from '../modules/NewsService';
import { Form } from 'semantic-ui-react';

const NewsSearch = () => {
  const dispatch = useDispatch();

  const getNewsResult = async (query) => {
    const newsResultData = await NewsService.search(query);
    dispatch({ type: 'SET_NEWS_FEED', payload: newsResultData.articles });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const search = event.target.search.value.trim();
    if (search) {
      getNewsResult(search);
    }
  };

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <Form.Field>
          <input
            data-cy="search-input"
            name="search"
            placeholder="Search..."
          ></input>
        </Form.Field>
        <Form.Button data-cy="search-button">Search</Form.Button>
      </Form>
    </>
  );
};

export default NewsSearch;
