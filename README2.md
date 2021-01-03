import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import NewsService from "../modules/NewsService";
import { Input, Button } from "semantic-ui-react";
import axios from "axios";

const NewsSearch = () => {
  const [post, setPost] = useState([]);
  const [id, setId] = useState("");
  const [idFromButtonClick, setIdFromButtonClick] = useState("");
  const getNewsServiceSearch = async () => {
    let response = await NewsService.search(id);
      setPost(response);
  };

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(
        `http://newsapi.org/v2/everything?q=${idFromButtonClick}&language=en&apiKey=dae7714c2de74ce1b1c383440f50a9e9`
      )
      .then((res) => {
        console.log(res);
        setPost(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  return (
    <>
      <Input
        data-cy="search_input"
        type="text"
        placeholder="Search topic"
        value={id}
        onChange={(e) => setId(e.target.value)}
      ></Input>
      <Button data-cy="search_button" onClick={handleClick}>
        Search
      </Button>
      <div>
        <ul>
          {post.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NewsSearch;
