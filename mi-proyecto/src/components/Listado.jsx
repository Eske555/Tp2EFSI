import Cita from "./Cita";

function Listado({ citas }) {
  return (
    <div className="one-half column">
      <h2>Administra tus citas</h2>

      <div className="lista-citas">
        {citas.map((cita, index) => (
          <Cita key={index} cita={cita} />
        ))}
      </div>
    </div>
  );
}

export default Listado;