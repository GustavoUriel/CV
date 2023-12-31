import "bootstrap/dist/css/bootstrap.min.css";
import "css/UserService.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useServerSide } from "components/logical/ServerSide";
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
import { render } from "react-dom";
import ButtonDeleteService from "components/ButtonDeleteService";
import ButtonModifyService from "components/ButtonModifyService";

export default function UserService(props) {
  const {
    selectUser,
    listUserServices,
    addUserService,
    removeUserService,
    listServices,
    listProviders,
    listUserInfo,
    listUsers,
    stillLoading,
  } = useServerSide();
  const user = listUserInfo();
  const [open, setOpen] = useState(false);
  const [showModalConfirmDelete, setShowModalConfirmDelete] = useState(false);
  if (!user) {
    return <div>Logueate para cargar tus servicios</div>;
  }

  var showServices = listUserServices();
  const services = listServices();
  const providers = listProviders();
  if (props.idService) {
    showServices = showServices.filter((i) => i.idService == props.idService);
  }
  if (props.idProvider) {
    showServices = showServices.filter((i) => i.idProvider == props.idProvider);
  }

  const modifyService = (props) => {};

  if (!showServices) {
    return <div> No hay servicios que cumplan los parámetros enviados </div>;
  }
  return showServices.map((i) => {
    let docService = services.find((x) => x.id == i.idService);
    let docProvider = providers.find((x) => x.id == i.idProvider);
    let savings = Math.random() * 50;
    let txtMoney = "";
    let pesos = i.value;
    {
      docService.isCredit
        ? pesos < 0
          ? (txtMoney = "Tu deuda es de " + pesos + " pesos.")
          : (txtMoney = "Tus ahorros son de " + pesos + " pesos.")
        : (txtMoney = "Estás pagando " + pesos + " pesos por mes.");
    }
    return (
      <div className="service-card">
        <Container fluid>
          <Row>
            <Col xs lg="1">
              <img
                width={90}
                height={90}
                className="align-self-start"
                src={docProvider.image}
                alt={docProvider.name}
              />
            </Col>
            <Col xs lg="1">
              <img
                width={90}
                height={90}
                className="align-self-start"
                src={docService.image}
                alt={docService.name}
              />
            </Col>
            <Col xs lg="4" className="service-card-provider">
              <h5>{docProvider.name}</h5>
              <p> {docProvider.description} </p>
            </Col>
            <Col md className="service-card-service">
              <h5>{docService.name}</h5>
              <p>{docService.description}</p>
              <p className="gray-text small-text">
                Registraste este servicio el: {i.date}
              </p>
            </Col>
          </Row>
          <Row>
            <Col md className="service-card-proposal-button">
              {savings <= 10 ? (
                <Button variant="primary" block>
                  {txtMoney} Este servicio esta optimizado. Felicitaciones!{" "}
                </Button>
              ) : (
                <Button
                  variant="success"
                  onClick={() => setOpen(open == i.id ? "" : "" + i.id)}
                  aria-expanded={open}
                  block
                >
                  {txtMoney}
                  <br />
                  Podés obtener hasta un {parseInt(savings)}% de ahorro {open}
                </Button>
              )}
            </Col>
            <Col xs lg="2" className="service-card-edit-button">
              <ButtonModifyService
                id={i.id}
                date={i.date}
                service={docService.name}
                idService={docService.id}
                Provider={docProvider.description}
                idProvider={docProvider.id}
              />
            </Col>
            <Col xs lg="2" className="service-card-remove-button">
              <ButtonDeleteService
                id={i.id}
                date={i.date}
                service={docService.name}
                provider={docProvider.description}
              />
            </Col>
          </Row>
        </Container>
        <Collapse in={open == "" + i.id} className="service-card-proposal">
          <div id={"aa"}>
            Esta es la explicación de cómo lograr ese ahorro, ya sea
            renegociando o cambiando el proveedor del servicio
          </div>
        </Collapse>
      </div>
    );
  });
}
