import "./Cita.css";

function Cita({ cita, eliminarCita }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{cita.mascota}</span></p>
      <p>Dueño: <span>{cita.dueño}</span></p>
      <p>Fecha: <span>{cita.fecha}</span></p>
      <p>Hora: <span>{cita.hora}</span></p>
      {cita.sintomas && <p>Síntomas: <span>{cita.sintomas}</span></p>}
      <button className="button eliminar" onClick={() => eliminarCita(cita.id)}>
        Eliminar ×
      </button>
    </div>
  );
}

export default Cita;
