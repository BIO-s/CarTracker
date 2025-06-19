import CarList from '../components/CarList';
import { Link } from 'react-router-dom';

function CarsPage({ cars }) {
	return (
	<div>
		<Link to="/" className="button back-button">Back</Link>
		<CarList cars={cars} />
	</div>
	);
}

export default CarsPage;