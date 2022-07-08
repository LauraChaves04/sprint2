import React from "react";
import "./Filtros.css";
//import { FontAwesomeIcon } from "@fortawasome/react-fontawesome";
//import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Filtros({
  setPrecio,
  setPaises,
  setCapacidad,
  setFechaDesde,
  setFechaHasta,
  resetFilters
}) {
  /*
  const manejarClick = () => {
    alert("el hotel ha sido reservado");
};*/

  return (
    <form className="Filtros">
      <div className="FiltroDesde">
        <label htmlFor="desde">Desde</label>
        <input
          type="date"
          id="desde"
          onChange={(e) => setFechaDesde(e.target.valueAsDate.valueOf())}
        />
      </div>

      <div className="FiltroHasta">
        <label htmlFor="hasta">Hasta</label>
        <input
          type="date"
          id="hasta"
          onChange={(e) => setFechaHasta(e.target.valueAsDate.valueOf())}
        />
      </div>

      <div>
        <label>Capacidad</label>
        <select onChange={(e) => setCapacidad(e.target.value)}>
          <option value="todos">Todos</option>
          <option value="pequeño">Pequeño</option>
          <option value="mediano">Mediano</option>
          <option value="grande">Grande</option>
        </select>
      </div>
      <div>
        <label>Precio</label>
        <select onChange={(e) => setPrecio(e.target.value)}>
          <option value="Todos">Todos</option>
          <option value="1">$</option>
          <option value="2">$$</option>
          <option value="3">$$$</option>
          <option value="4">$$$$</option>
        </select>
      </div>
      <div>
        <label>País</label>
        {/* filtrosPais(paisSeleccionado)*/}
        <select onChange={(e) => setPaises(e.target.value)}>
          <option value="Todos">Todos</option>
          <option value="Argentina">Argentina</option>
          <option value="Brasil">Brasil</option>
          <option value="Chile">Chile</option>
          <option value="Uruguay">Uruguay</option>
        </select>
      </div>
      <button type="reset" onClick={() => resetFilters()}>
        RESET
      </button>
    </form>
  );
}

export default Filtros;
