import React from "react";
import NewsSearch from "./components/NewsSearch";
import { Container, Menu, Header, Image } from "semantic-ui-react";
import NewsIndex from "./components/NewsIndex";
import logo from "./nwn.png";
import { useDispatch } from "react-redux";
import NewsService from "./modules/NewsService";

const App = () => {
	const dispatch = useDispatch();

	return (
		<>
			<Menu style={{ borderRadius: 0, background: "" }}>
				<Menu.Item>
					<Image
						data-cy="newsindex-button"
						src={logo}
            size="tiny"
						onClick={() => NewsService.index(dispatch)}
					/>
				</Menu.Item>
				<Menu.Menu position="right">
					<Menu.Item>
						<NewsSearch />
					</Menu.Item>
				</Menu.Menu>
			</Menu>
			<Container>
				<Header as="h2">News Wire Network</Header>
				<p>News from around the world</p>
				<NewsIndex />
			</Container>
		</>
	);
};

export default App;
