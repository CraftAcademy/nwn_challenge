import React from "react";
import NewsSearch from "./components/NewsSearch";
import { Container, Menu, Header, Image } from "semantic-ui-react";
import NewsIndex from "./components/NewsIndex";
import logo from "./nwn.png";

const App = () => {
  return (
    <>
      <Menu style={{ borderRadius: 0, background: "" }}>
        <Menu.Item>
          <Image src={logo} size="small" centered />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <NewsSearch />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <Container>
        <Header as="h1">News Wire Network</Header>
        <h3>News from around the world</h3>
        <NewsIndex />
      </Container>
    </>
  );
};

export default App;
