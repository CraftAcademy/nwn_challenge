import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input } from "semantic-ui-react";

const NewsSearch = () => {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.specificNews);
	const searchNews = async () => {
    const query = searchValue
		let searchResponse = await NewsService.search(query);
		dispatch({ type: "SEARCH_NEWS", payload: searchResponse });
	};

  useEffect(searchNews, []);
  
  let searchDisplay = articles.map((article) => {
    return <NewsCard article={article} />;
  });
	return (
    <>
    <Input 
    data-cy="search-input" 
    action="Search" 
    placeholder="Search..." 
    onChange={(event) => searchValue(event)}
    />
    <Card.Group itemsPerRow={5}>{searchDisplay}</Card.Group>;
    </>
	);
};

export default NewsSearch;
