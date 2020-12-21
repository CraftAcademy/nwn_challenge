import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import NewsService from '../modules/NewsService'
import { Button, Input } from 'semantic-ui-react'


const NewsSearch = () => {
  const [searchInput, setSearchInput] = useState()
  const dispatch = useDispatch()
  const fetchSearchResult = async () => {
    let searchResult = await NewsService.search(searchInput)
    dispatch({ type: "SET_NEWS_FEED", payload: searchResult })
    debugger
  }

  return (
    <>
      <Input
        type='text'
        placeholder='Search...'
        data-cy='search-input'
        onBlur={(e) => setSearchInput(e.target.value)} />
      <Button
        data-cy='search-button'
        onClick={fetchSearchResult}
      >Search
      </Button>
    </>
  )
}

export default NewsSearch
