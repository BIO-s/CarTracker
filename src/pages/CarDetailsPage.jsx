import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../store/carsSlice';
import CarCard from '../components/CarCard';

function CarDetailsPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { cars, status } = useSelector((state) => state.cars);

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchCars());
		}
	}, [status, dispatch]);

	const car = cars.find((c) => String(c.id) === id);

	if (status === 'loading') return <div>Loading...</div>;
	if (!car) return <div>Car not found</div>;

	return (
		<div>
			<button className="button" onClick={() => navigate('/cars')}>Back</button>
			<h1>Car Details</h1>
			<CarCard car={car} />
		</div>
	);
}

export default CarDetailsPage;
