import { useParams, Link } from 'react-router-dom';
import AddCarForm from '../components/AddCarForm';

function EditCarPage({ cars }) {
	const { id } = useParams();
	const car = cars.find((c) => c.id === parseInt(id));

	if (!car) return <div>Car not found</div>;

	return (
	<div>
		<Link to="/cars" className="button">Back</Link>
		<h1>Edit Car</h1>
		<AddCarForm car={car} />
	</div>
	);
}

export default EditCarPage;