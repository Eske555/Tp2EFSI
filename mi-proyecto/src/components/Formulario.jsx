function Formulario() {
  return (
    <div className="one-half column">
      <h2>Crear mi cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input type="text" className="u-full-width" />

        <label>Nombre Dueño</label>
        <input type="text" className="u-full-width" />

        <label>Fecha</label>
        <input type="date" className="u-full-width" />

        <label>Hora</label>
        <input type="time" className="u-full-width" />

        <label>Sintomas</label>
        <textarea className="u-full-width"></textarea>

        <button className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </div>
  );
}

export default Formulario;