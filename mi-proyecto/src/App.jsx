import { useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import "./App.css";

function App() {
  const [citas] = useState([
    {
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ]);

  return (
  <div className="container">
    <div className="header">
      <h1>CREAR MI CITA</h1>
      <h1>ADMINISTRA TUS CITAS</h1>
    </div>

    <div className="content">
      <Formulario />
      <Listado citas={citas} />
    </div>
  </div>
);
}

export default App;