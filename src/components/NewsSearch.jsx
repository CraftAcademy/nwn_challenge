import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewsService from '../modules/NewsService'
import { Input, Button } from 'semantic-ui-react'


const NewsSearch = () => {
  return (
    <>
    <Input data-cy="search_input" type="text" placeholder="Search topic" ></Input>
    <Button data-cy="search_button">Search</Button>
    </>

  )
}

export default NewsSearch
