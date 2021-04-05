import React from 'react';
import './ProfileMobile.css';
import {
  Row, Col
} from 'react-bootstrap';
import Profile from '../../images/perfil.png';
import IconInsta from '../../images/insta.png';
import IconFace from '../../images/face.png';
import IconEmail from '../../images/email.png';
import IconTwitter from '../../images/twitter.png';
import IconShare from '../../images/share.png';

function ProfileMobile() {
  return (
    <div className="d-flex justify-content-center">
      <Row className="background-div-mb">
        <Col md="4" className="d-flex justify-content-center align-items-center tam-row-name-mb">
          <h4><b>ERIKA KOKAY</b></h4>
        </Col>
        <Col md="4" className="d-flex justify-content-center align-items-center">
          <img src={Profile} alt="Profile" className="img-arredondada" />
        </Col>
        <Col md="7">
          <Row className="tam-row-name-mb">
            <Col md="12">
              <h4>TITULAR EM EXERCÍCIO 2019 - 2023</h4>
            </Col>
          </Row>
          <Row className="tam-row-info-mb">
            <Col md="6" className="col-info-mb">
              <h5>Informações pessoais</h5>
              <h6><b>Nome:</b></h6>
              <h6><b>Partido:</b></h6>
              <h6><b>Estado:</b></h6>
              <h6><b>Idade:</b></h6>
            </Col>
            <Col md="6" className="col-info-mb">
              <h5>Informações do gabinete</h5>
              <h6><b>Número da sala:</b></h6>
              <h6><b>Andar:</b></h6>
              <h6><b>Prédio:</b></h6>
              <h6><b>Telefone:</b></h6>
            </Col>
          </Row>
          <Row className="tam-row-social-mb d-flex justify-content-center align-items-center">
            <img src={IconEmail} alt="Email" className="icon-email" />
            <img src={IconInsta} alt="Insta" className="icon-insta" />
            <img src={IconFace} alt="Face" className="icon-face" />
            <img src={IconTwitter} alt="Twitter" className="icon-tt" />
            <img src={IconShare} alt="Share" className="icon-share" />
          </Row>
        </Col>
      </Row>
    </div>

  );
}

export default ProfileMobile;