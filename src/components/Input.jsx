function Input({ label, type, name, value, onChange, onBlur, placeholder, required }) {
	return (
	<div className="form-group">
		<label>{label}</label>
		<input
		type={type}
		name={name}
		value={value}
		onChange={onChange}
		onBlur={onBlur}
		placeholder={placeholder}
		required={required}
		/>
	</div>
	);
}

export default Input;