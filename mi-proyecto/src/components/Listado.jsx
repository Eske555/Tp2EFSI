import Cita from "./Cita";
import "./Listado.css";

function Listado({ citas, eliminarCita }) {
  return (
    <div className="listado-citas">
      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
      ))}
    </div>
  );
}

export default Listado;
