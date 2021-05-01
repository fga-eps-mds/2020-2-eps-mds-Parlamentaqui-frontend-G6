import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './index.css';
import { Container, Row, Col } from 'react-bootstrap';
import TweetEmbed from 'react-tweet-embed';
import { deputyTweetsRoute } from '../../Api';

function Tweet() {
  const history = useHistory();
  const id = history.location.pathname.split('/')[3];
  const [tweets, setTweets] = useState({});
  useEffect(() => {
    axios.get(deputyTweetsRoute(id)).then((response) => {
      setTweets(response.data);
    });
  }, []);
  return (
    <div className="tweet-wrapper">
      <Container>
        <Row>
          {console.log(tweets)}
          {tweets.map((item) => (
            <Col lg="12">
              {/* <TweetEmbed key={item.tweet_id} id={`${item.tweet_id}`} /> */}
            </Col>
          ))}
          {console.log(tweets)}
        </Row>
      </Container>
    </div>
  );
}

export default Tweet;
