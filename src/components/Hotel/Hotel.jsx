import React from "react";
import "./Hotel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";

function Hotel(props) {
  return (
    <div className="hotel">
      <h3>{props.nombre}</h3>
      <h5>{props.pais}</h5>
      <picture>
        <img width="100%" src={props.imagen} alt={props.nombre} />
      </picture>

      <div className="container_rooms_price">
        <section className="rooms">
          <FontAwesomeIcon icon={faCampground} />
          <p>{props.habitaciones} habitaciones</p>
        </section>

        <article className="Price">
          {/*
          toma a precio y genera el mismo numero de $
          que hay en precio
        */}
          {Array.from({ length: props.precio }, (i) => {
            return (
              <span key={i} className="bold">
                $
              </span>
            );
          })}
          {/*
          genera el numero faltante de $ para ajustar
          los 4 
        */}
          {Array.from({ length: 4 - props.precio }, (i) => {
            return <span key={i}>$</span>;
          })}
        </article>
      </div>
      <section className="description">
        <p>{props.description}</p>
      </section>
      <button
        className="button-reservar"
        onClick={() => alert("el hotel ha sido reservado")}
      >
        Reservar
      </button>
    </div>
  );
}

export default Hotel;
