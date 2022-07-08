import "./styles.css";
import { useState, useEffect } from "react";
import Header from "../src/components/Header/Header";
import Filtros from "../src/components/Filtros/Filtros";
import Hoteles from "../src/components/Hoteles/Hoteles";
import { hotelsData } from "./hotelsData.js";

export default function App() {
  const today = new Date();

  const [fechaDesde, setFechaDesde] = useState(today.valueOf() - 1000000000);
  const [fechaHasta, setFechaHasta] = useState(today.valueOf() + 3456000000);
  const [capacidad, setCapacidad] = useState("Todos");
  const [precio, setPrecio] = useState("Todos");
  const [paises, setPaises] = useState("Todos");

  const [hotelesFiltrados, setHotelesFiltrados] = useState(hotelsData);

  function filterHoteles() {
    const hoteles = hotelsData
      .filter((hotel) => {
        if (paises === "Todos") {
          return hotelsData;
        } else {
          return hotel.country === paises;
        }
      })
      .filter((hotel) => {
        if (precio === "Todos") {
          return hotelsData;
        } else {
          return hotel.price === Number(precio);
        }
      })
      .filter((hotel) => {
        if (capacidad === "Todos") {
          return hotelsData;
        } else {
          // si es pequeño, retornar menor a 10
          if (capacidad === "pequeño") {
            return hotel.rooms < 10;
          } else if (capacidad === "mediano") {
            return hotel.rooms > 10 && hotel.rooms < 20;
          } else {
            return hotel.rooms > 20;
          }
        }
      })
      .filter((hotel) => {
        return hotel.availabilityFrom >= fechaDesde;
      })
      .filter((hotel) => {
        return hotel.availabilityTo <= fechaHasta;
      });

    setHotelesFiltrados(hoteles);
  }

  function resetFilters() {
    setFechaDesde(today.valueOf() - 1000000000);
    setFechaHasta(today.valueOf() + 3456000000);
    setCapacidad("Todos");
    setPrecio("Todos");
    setPaises("Todos");
  }

  useEffect(() => {
    filterHoteles();
  }, [paises, precio, capacidad, fechaDesde, fechaHasta]);

  return (
    <div className="App">
      <Header
        paises={paises}
        capacidad={capacidad}
        precio={precio}
        fechaDesde={fechaDesde}
        fechaHasta={fechaHasta}
      />
      <Filtros
        filterHoteles={filterHoteles}
        setCapacidad={setCapacidad}
        setPaises={setPaises}
        setPrecio={setPrecio}
        setFechaDesde={setFechaDesde}
        setFechaHasta={setFechaHasta}
        resetFilters={resetFilters}
      />
      <Hoteles hotelesFiltrados={hotelesFiltrados} />
    </div>
  );
}

/// const a = [1,2,3,4]
// const b = ["Miguel", "Angel"]
// const nombre = "Tatiana"

// const c = [...a, nombre]
