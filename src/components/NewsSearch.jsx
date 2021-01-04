import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import NewsService from '../modules/NewsService'
import { Input } from 'semantic-ui-react'


const NewsSearch = () => {
  const dispatch = useDispatch()
  const [inputValue, setSearchInputValue] = useState()
  const searchArticles = async () => {
    let searchResult = await NewsService.search(inputValue)
    dispatch({ type: "SET_NEWS_FEED", payload: searchResult})

  }

  useEffect(searchArticles, [] )

  return (
    <>
    <Input 
    
    action='Search' 
    placeholder='Search...' 
    data-cy="search-input"
    onChange={(event) => setSearchInputValue(event.target.value)}
    onClick={searchArticles}
    />
    </>
  )
}

export default NewsSearch
