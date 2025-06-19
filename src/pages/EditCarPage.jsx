import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { updateCar, fetchCars } from '../store/carsSlice';
import AddCarForm from '../components/AddCarForm';

function EditCarPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { cars, status } = useSelector((state) => state.cars);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchCars());
		}
	}, [status, dispatch]);

	const car = cars.find((c) => c.id === id);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const updatedCar = {
			id,
			manufacturer: e.target.manufacturer.value,
			model: e.target.model.value,
			color: e.target.color.value,
			vin: e.target.vin.value,
			price: e.target.price.value,
			isNew: e.target.isNew.checked,
			userId: car.userId,
		};
		await dispatch(updateCar(updatedCar));
		navigate('/cars');
	};

	if (status === 'loading') return <div>Loading...</div>;
	if (!car) return <div>Car not found</div>;

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
