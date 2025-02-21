import React from "react";
import Card from "react-bootstrap/Card";
import Tags from "./Tags";
import "../hojas-de-estilos/Adoptar.css";

const Cards = ({ nombre, imagen, descripcion, colorButton, raza }) => {
  return (
    <>
      <Card style={{ width: "18rem" }} className="cartas">
        <div className="caninos">
          <Card.Img  className="imagen" variant="top" src={imagen} alt= {nombre} />
          <Card.Body>
            <Card.Title>
              <strong>{nombre}</strong>
            </Card.Title>
            <Card.Text className="descripcion">{descripcion}</Card.Text>
            <Tags colorButton={colorButton} raza={raza} />
          </Card.Body>
        </div>
      </Card>
    </>
  );
};

export default Cards;
