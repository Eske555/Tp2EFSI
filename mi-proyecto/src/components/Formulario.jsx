import { useState } from "react";
import "./Formulario.css";

function Formulario({ agregarCita }) {
  const [mascota, setMascota] = useState("");
  const [dueño, setDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mascota || !dueño || !fecha || !hora || !sintomas) return;
    agregarCita({ mascota, dueño, fecha, hora, sintomas });
    setMascota(""); setDueño(""); setFecha(""); setHora(""); setSintomas("");
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label>Nombre Mascota</label>
      <input type="text" placeholder="Nombre Mascota" value={mascota} onChange={(e) => setMascota(e.target.value)} />

      <label>Nombre Dueño</label>
      <input type="text" placeholder="Nombre dueño de la mascota" value={dueño} onChange={(e) => setDueño(e.target.value)} />

      <label>Fecha</label>
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />

      <label>hora</label>
      <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} />

      <label>Síntomas</label>
      <textarea value={sintomas} onChange={(e) => setSintomas(e.target.value)} />

      <button type="submit">Agregar Cita</button>
    </form>
  );
}

export default Formulario;
