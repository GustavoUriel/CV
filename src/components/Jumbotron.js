import React from "react";
import "css/Jumbotron.css";
import InsertImage from "components/InsertImage";
import logo from "img/pesos.png";
import { useLocalContext } from "components/logical/ServerSide";
import {
  Media,
  Container,
  Row,
  Col,
  Collapse,
  Card,
  ListGroup,
  Figure,
  Accordion,
  Button,
  OverlayTrigger,
  Modal,
} from "react-bootstrap";
import { useServerSide } from "components/logical/ServerSide";

export default function Jumbotron() {



  return (
    <Container fluid className="jumbotron-container">
      <Row fluid>
        <Col fluid>
          <InsertImage src={logo} Size={100} />
        </Col>
        <Col fluid>
          <h1>ES TU PLATA!!</h1>
          <h3>Y te decimos cómo cuidarla</h3>
          <br />
        </Col>
        <Col fluid>
          <button
            className="btn btn-block nav-link btn-warning font-weight-bold"
            id="RegistrarseButton"
          >
            Registrate...
          </button>
          <button
            className="btn btn-block nav-link btn-light font-weight-bold"
            id="AnonimoButton"
          >
            Entrada anónima
          </button>
        </Col>
      </Row>
    </Container>
  );
}
