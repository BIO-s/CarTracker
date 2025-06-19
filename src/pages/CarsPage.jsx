import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../store/carsSlice';
import CarList from '../components/CarList';
import { Link } from 'react-router-dom';

function CarsPage() {
	const dispatch = useDispatch();
	const { cars, status, error } = useSelector((state) => state.cars);

	useEffect(() => {
		dispatch(fetchCars());
	}, [dispatch]);

	if (status === 'loading') return <div>Loading...</div>;
	if (status === 'failed') return <div>Error: {error}</div>;

	return (
		<div>
			<Link to="/" className="button back-button">Back</Link>
			<CarList cars={cars} />111
		</div>
	);
}

export default CarsPage;