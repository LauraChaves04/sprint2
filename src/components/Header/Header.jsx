import "./Header.css";
import imgUrl from "./Images/fondo.jpg";

export function Header({ capacidad, paises, fechaDesde, fechaHasta, precio }) {
  const headerStyles = {
    backgroundImage: "url(" + imgUrl + ")",
    backgroundPosition: "center"
  };

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };

  return (
    <div className="Header" style={headerStyles}>
      <div className="slogan">
        <h1>Encuentra tu alojamiento</h1>
        <p> A tu destino, a tu gusto y presupuesto </p>
      </div>
      <div className="Tusfiltros">
        <h2>Tus filtros</h2>
        <p>Pais: {paises}</p>
        <p>Precio: {precio}</p>
        <p>Capacidad: {capacidad}</p>
        <p>
          Disponible Desde:
          {new Date(fechaDesde).toLocaleString("es-ES", options)}{" "}
        </p>
        <p>
          Disponible Hasta:{" "}
          {new Date(fechaHasta).toLocaleString("es-ES", options)}
        </p>
      </div>
    </div>
  );
}

export default Header;
