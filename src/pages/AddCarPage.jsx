import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCar } from '../store/carsSlice';
import AddCarForm from '../components/AddCarForm';

function AddCarPage() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newCar = {
			manufacturer: e.target.manufacturer.value,
			model: e.target.model.value,
			color: e.target.color.value,
			vin: e.target.vin.value,
			price: e.target.price.value,
			isNew: e.target.isNew.checked,
			userId: '1',
		};
		await dispatch(addCar(newCar));
		navigate('/cars');
	};

	return (
		<div>
			<button className="button back-button" onClick={() => navigate('/cars')}>Back</button>
			<h1>Add Car</h1>
			<form onSubmit={handleSubmit}>
				<AddCarForm />
			</form>
		</div>
	);
}

export default AddCarPage;
