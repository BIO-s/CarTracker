import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCar } from '../store/carsSlice';
import AddCarForm from '../components/AddCarForm';

function EditCarPage({ cars }) {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const car = useSelector((state) => state.cars.cars.find((c) => c.id === parseInt(id)));

	const handleSubmit = (e) => {
	e.preventDefault();
	const updatedCar = {
		id: parseInt(id),
		manufacturer: e.target.manufacturer.value,
		model: e.target.model.value,
		color: e.target.color.value,
		vin: e.target.vin.value,
		price: e.target.price.value,
		isNew: e.target.isNew.checked,
		userId: car.userId,
	};
	dispatch(updateCar(updatedCar));
	navigate('/cars');
	};

	return (
	<div>
		<button className="button back-button" onClick={() => navigate('/cars')}>Back</button>
		<h1>Edit Car</h1>
		<form onSubmit={handleSubmit}>
		<AddCarForm car={car} />
		</form>
	</div>
	);
}

export default EditCarPage;