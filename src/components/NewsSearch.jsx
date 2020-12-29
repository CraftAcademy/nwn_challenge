import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import NewsService from '../modules/NewsService';
import { Form } from 'semantic-ui-react';

const NewsSearch = () => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const [isSearched, setIsSearched] = useState(false);

  const getNewsResult = async (query) => {
    const newsResultData = await NewsService.search(query);
    dispatch({ type: 'SET_NEWS_FEED', payload: newsResultData.articles });
    setMessage('');
    setIsSearched(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const searchInput = event.target.search.value.trim();
    if (searchInput) {
      getNewsResult(searchInput);
    } else {
      setMessage('Please provide search input');
    }
  };

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <table>
          <tr>
            <td>
              <Form.Field>
                <input
                  data-cy="search-input"
                  name="search"
                  placeholder="Search..."
                ></input>
              </Form.Field>
            </td>
            <td>
              <Form.Button data-cy="search-button">Search</Form.Button>
            </td>
            <td>
              {isSearched && (
                <Form.Button data-cy="top-headlines-button">
                  Top Headlines
                </Form.Button>
              )}
            </td>
          </tr>
          <tr>
            <td>
              <p data-cy="error-message" style={{ color: 'red' }}>
                {message}
              </p>
            </td>
          </tr>
        </table>
      </Form>
    </>
  );
};

export default NewsSearch;
