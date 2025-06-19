import Button from './Button';

function CarCard({ car }) {
	return (
	<div className="card">
		<h3>{car.manufacturer} {car.model}</h3>
		<p>Color: {car.color}</p>
		<p>VIN: {car.vin}</p>
		<Button>Details</Button>
	</div>
	);
}

export default CarCard;