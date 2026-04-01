import { useState } from "react";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";

function App() {
  const [citas] = useState([
    {
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    }
  ]);

  return (
    <div className="container">
      <h1>Administrador de Pacientes</h1>

      <div className="row">
        <Formulario />
        <Listado citas={citas} />
      </div>
    </div>
  );
}

export default App;