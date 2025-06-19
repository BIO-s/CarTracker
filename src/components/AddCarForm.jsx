function AddCarForm() {
	return (
	<div className="form-group">
		<label>Manufacturer</label>
		<input type="text" placeholder="e.g., Ford" />
		<label>Model</label>
		<input type="text" placeholder="e.g., Mustang" />
		<label>Color</label>
		<input type="text" placeholder="e.g., Black" />
		<label>VIN</label>
		<input type="text" placeholder="e.g., 39VIT7U77526879967" />
		<label>Price</label>
		<input type="number" placeholder="e.g., 880.69" />
		<label className="form-true">Is New</label>
		<input className="form-true-checkbox" type="checkbox" />
		<button className="button submit-button">Submit</button>
	</div>
	);
}

export default AddCarForm;