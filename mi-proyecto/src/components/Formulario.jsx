import "./Formulario.css";

function Formulario() {
  return (
    <div className="formulario">
      <label>Nombre Mascota</label>
      <input type="text" placeholder="Nombre Mascota" />

      <label>Nombre Dueño</label>
      <input type="text" placeholder="Nombre dueño de la mascota" />

      <label>Fecha</label>
      <input type="date" />

      <label>Hora</label>
      <input type="time" />

      <label>Sintomas</label>
      <textarea />

      <button>AGREGAR CITA</button>
    </div>
  );
}

export default Formulario;