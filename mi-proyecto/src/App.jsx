import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [citas, setCitas] = useState([
    { id: 1, mascota: "Nina", dueño: "Martin", fecha: "2021-08-05", hora: "08:20", sintomas: "Le duele la pioma" },
    { id: 2, mascota: "Sifon", dueño: "Flocha", fecha: "2023-08-05", hora: "09:21", sintomas: "Duerme mucho" },
    { id: 3, mascota: "Floki", dueño: "Ari", fecha: "2023-09-05", hora: "16:15", sintomas: "" }
  ]);

  const agregarCita = (cita) => setCitas([...citas, { ...cita, id: Date.now() }]);
  const eliminarCita = (id) => setCitas(citas.filter((c) => c.id !== id));

  return (
    <div>
      <h1>Administrador de Pacientes</h1>
      <Header />
      <div className="contenido">
        <div className="formulario-col">
          <Formulario agregarCita={agregarCita} />
        </div>
        <div className="listado-col">
          <Listado citas={citas} eliminarCita={eliminarCita} />
        </div>
      </div>
    </div>
  );
}

export default App;
