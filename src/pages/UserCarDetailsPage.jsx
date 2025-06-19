import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCars } from '../store/carsSlice';
import CarCard from '../components/CarCard';

function UserCarDetailsPage() {
	const { userId, carId } = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { cars, status } = useSelector(state => state.cars);

	useEffect(() => {
	if (status === 'idle') {
		dispatch(fetchCars());
	}
	}, [status, dispatch]);

	const car = cars.find(c => String(c.id) === carId);

	if (status === 'loading') return <div>Loading...</div>;
	if (!car) return <div>Car not found</div>;

	return (
	<div>
		<button className="button" onClick={() => navigate(`/users/${userId}`)}>Back</button>
		<h1>Car Details</h1>
		<CarCard car={car} />
	</div>
	);
}

export default UserCarDetailsPage;
