import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewsService from '../modules/NewsService';
import { Form } from 'semantic-ui-react';

const NewsSearch = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.searchMessage);

  const getNewsResult = async (query) => {
    const newsResultData = await NewsService.search(query);
    dispatch({ type: 'SET_NEWS_FEED', payload: newsResultData.articles });
    dispatch({ type: 'SET_SEARCH_MESSAGE', payload: '' });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const searchResult = event.target.search.value.trim();
    if (searchResult) {
      getNewsResult(searchResult);
    } else {
      dispatch({
        type: 'SET_SEARCH_MESSAGE',
        payload: 'Please provide search input',
      });
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
      <p data-cy="error-message" style={{ color: 'red' }}>
        {message}
      </p>
    </>
  );
};

export default NewsSearch;
