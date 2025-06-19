import { useState } from 'react';
import Input from './Input';

function AddCarForm({ car }) {
	const [formData, setFormData] = useState(
	car || {
		manufacturer: '',
		model: '',
		color: '',
		vin: '',
		price: '',
		isNew: false,
	}
	);
	const [errors, setErrors] = useState({
		manufacturer: '',
		model: '',
		color: '',
		vin: '',
		price: '',
	});

	const handleChange = (e) => {
	const { name, value, type, checked } = e.target;
	const newValue = type === 'checkbox' ? checked : value;
	setFormData((prev) => ({
		...prev,
		[name]: newValue,
	}));
	setErrors((prev) => ({
		...prev,
		[name]: '',
	}));
	};

	const handleBlur = (e) => {
	const { name, value } = e.target;
	let error = '';
	if (!value.trim()) {
		error = 'This field is required';
	} else if (name === 'price') {
		const numValue = parseFloat(value);
		if (isNaN(numValue) || value.match(/[^0-9.]/)) {
		error = 'The field must contain only numbers';
		}
	}
	setErrors((prev) => ({
		...prev,
		[name]: error,
	}));
	e.target.setCustomValidity(error || '');
	};

	return (
	<div className="form-group">
		<Input
			label="Manufacturer"
			type="text"
			name="manufacturer"
			value={formData.manufacturer}
			onChange={handleChange}
			onBlur={handleBlur}
			placeholder="e.g., Ford"
			required
		/>
		{errors.manufacturer && <p className="error-message">{errors.manufacturer}</p>}
		<Input
			label="Model"
			type="text"
			name="model"
			value={formData.model}
			onChange={handleChange}
			onBlur={handleBlur}
			placeholder="e.g., Mustang"
			required
		/>
		{errors.model && <p className="error-message">{errors.model}</p>}
		<Input
			label="Color"
			type="text"
			name="color"
			value={formData.color}
			onChange={handleChange}
			onBlur={handleBlur}
			placeholder="e.g., Black"
			required
		/>
		{errors.color && <p className="error-message">{errors.color}</p>}
		<Input
			label="VIN"
			type="text"
			name="vin"
			value={formData.vin}
			onChange={handleChange}
			onBlur={handleBlur}
			placeholder="e.g., 39VIT7U77526879967"
			required
		/>
		{errors.vin && <p className="error-message">{errors.vin}</p>}
		<Input
			label="Price"
			type="text"
			name="price"
			value={formData.price}
			onChange={handleChange}
			onBlur={handleBlur}
			placeholder="e.g., 880.69"
			required
		/>
		{errors.price && <p className="error-message">{errors.price}</p>}
		<div className="form-group">
		<label className="form-true">Is New</label>
		<input
			className="form-true-checkbox"
			type="checkbox"
			name="isNew"
			checked={formData.isNew}
			onChange={handleChange}
		/>
		</div>
		<button className="button" type="submit" disabled={!formData.manufacturer || !formData.model || !formData.color || !formData.vin || !formData.price || parseFloat(formData.price) <= 0}>
		Submit
		</button>
	</div>
	);
}

export default AddCarForm;