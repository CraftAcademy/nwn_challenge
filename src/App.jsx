import React from 'react'
import NewsSearch from "./components/NewsSearch"
import { Container, Menu, Header, Image, Icon } from 'semantic-ui-react'
import NewsIndex from './components/NewsIndex'
import logo from './nwn.png'


const App = () => {
  return (
    <>
      <Menu inverted style={{ borderRadius: 0, background: '' }}>
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
        <Header as='h2' color='red'>
          <Icon name='globe' />
          News Wire Network
        </Header>
        <Header as='h3'>
          Top 20 Latest Technology News from around the world
        </Header>
        <NewsIndex />
      </Container>
    </>
  )
}

export default App
