function Input({ label, tipo = "text", name, placeholder, value, onChange }) {
  if (tipo === "textarea") {
    return (
      <div>
        <label>{label}</label>
        <textarea name={name} className="u-full-width" placeholder={placeholder !== undefined ? placeholder : label} value={value} onChange={onChange}></textarea>
      </div>
    );
  }
  return (
    <div>
      <label>{label}</label>
      <input type={tipo} name={name} className="u-full-width" placeholder={placeholder || label} value={value} onChange={onChange} />
    </div>
  );
}

export default Input;