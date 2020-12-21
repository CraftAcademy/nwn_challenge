import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NewsService from '../modules/NewsService'
import { Input } from 'semantic-ui-react'


const NewsSearch = () => {
  return (
    <Input
      action='Search'
      placeholder='Search...'
      data-cy='search-input'
    />
  )
}

export default NewsSearch
