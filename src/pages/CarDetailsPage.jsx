import { useParams, Link } from 'react-router-dom';
import CarCard from '../components/CarCard';

function CarDetailsPage({ cars }) {
	const { id } = useParams();
	const car = cars.find((c) => c.id === parseInt(id));

	if (!car) return <div>Car not found</div>;

	return (
	<div>
		<Link to="/cars" className="button">Back</Link>
		<h1>Car Details</h1>
		<CarCard car={car} />
	</div>
	);
}

export default CarDetailsPage;