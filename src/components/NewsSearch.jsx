import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
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
	return (
    <Input 
    data-cy="search-input" 
    action="Search" 
    placeholder="Search..." 
    onChange={(event) => searchValue(event)}
    />
	);
};

export default NewsSearch;
