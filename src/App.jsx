import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, Menu, Header, Image } from 'semantic-ui-react'
import NewsSearch from "./components/NewsSearch"
import NewsIndex from './components/NewsIndex'
import logo from './nwn.png'
import axios from 'axios'


const App = () => {

  const dispatch = useDispatch()
  const fetchHeadlineNews = async () => {
    let response = await axios.get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
    dispatch({type: 'SET_NEWS_FEED', payload: response.data.articles})
  }

  useEffect(() => {
    fetchHeadlineNews()
  })
  return (
    <>
      <Menu style={{ borderRadius: 0, background: '' }}>
        <Menu.Item>
          <Image src={logo} size='tiny' centered />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <NewsSearch />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>

        <Header as='h2' >
          News Wire Network
          </Header>
        <p>News from around the world</p>
        <NewsIndex />
      </Container>
    </>
  )
}

export default App
