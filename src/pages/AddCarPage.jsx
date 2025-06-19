import AddCarForm from '../components/AddCarForm';
import { Link } from 'react-router-dom';

function AddCarPage() {
	return (
	<div>
		<Link to="/cars" className="button back-button">Back</Link>
		<h1>Add Car</h1>
		<AddCarForm />
	</div>
	);
}

export default AddCarPage;