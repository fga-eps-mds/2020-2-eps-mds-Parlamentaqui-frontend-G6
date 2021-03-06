import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DataVotingMobile from '../../components/DataVoting/DataVotingMobile';
import SpentData from '../../components/SpentData/SpentData';
import SpentDataMobile from '../../components/SpentData/SpentDataMobile';
import Perfil from '../../components/Profile/Profile';
import PerfilMobile from '../../components/Profile/ProfileMobile';
import './index.css';
import DataVoting from '../../components/DataVoting/DataVoting';
import News from '../../components/News/News';
import Tweets from '../../components/Tweet/index';
import NewsMobile from '../../components/News/NewsMobile';
import AuthoredPropositions from '../../components/AuthoredPropositions/index';
import AuthoredPropositionsMobile from '../../components/AuthoredPropositions/AuthoredPropositionMobile';
import { deputyTweetsRoute, profileRoute } from '../../Api';

function DeputyProfileScreen() {
  const { id } = useParams();
  const [deputado, setDeputado] = useState({});
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    axios.get(profileRoute(id)).then((response) => {
      setDeputado(response.data);
    });
    axios.get(deputyTweetsRoute(id)).then((response) => {
      setTweets(response.data);
    });
  }, []);
  return (
    <main>
      <Container className="d-block d-sm-none">
        <PerfilMobile deputy={deputado} />
        <Row className="space" />
        <DataVotingMobile />
        <Row className="space" />
        <SpentDataMobile />
        <Row className="space" />
        <AuthoredPropositionsMobile />
        <NewsMobile />
        <Tweets tweets={tweets} />
      </Container>
      <Container className="d-none d-sm-block">
        <Perfil deputy={deputado} />
        <Row className="space" />
        <DataVoting />
        <Row className="space" />
        <SpentData />
        <Row className="space" />
        <AuthoredPropositions />
        <Row className="space" />
        <Row>
          <Col md="6">
            <News />
          </Col>
          <Col md="6">
            <Tweets tweets={tweets} />
          </Col>
        </Row>
      </Container>
      <Row className="space" />
    </main>
  );
}

export default DeputyProfileScreen;
