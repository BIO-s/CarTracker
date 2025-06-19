import { useParams, Link } from 'react-router-dom';
import CarCard from '../components/CarCard';

function UserCarDetailsPage({ users, cars }) {
	const { userId, carId } = useParams();
	const car = cars.find((c) => c.id === parseInt(carId));

	if (!car) return <div>Car not found</div>;

	return (
	<div>
		<Link to={`/users/${userId}`} className="button">Back</Link>
		<h1>Car Details</h1>
		<CarCard car={car} />
	</div>
	);
}

export default UserCarDetailsPage;