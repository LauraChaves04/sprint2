import React from "react";
import "./Hoteles.css";
import Hotel from "../Hotel/Hotel";

function Hoteles(props) {
  if (props.hotelesFiltrados.length > 0) {
    return (
      <div className="Hoteles">
        {props.hotelesFiltrados.map((hotel) => {
          return (
            <Hotel
              nombre={hotel.name}
              pais={hotel.country}
              imagen={hotel.photo}
              precio={hotel.price}
              habitaciones={hotel.rooms}
              description={hotel.description}
            />
          );
        })}
      </div>
    );
  } else {
    alert("No hay elementos");
    return <h2>No hay elementos disponibles</h2>;
  }
}

export default Hoteles;
