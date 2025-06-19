import CarCard from './CarCard';
import EmptyState from './EmptyState';

function CarList({ cars }) {
	return (
	<div className="carList">
		<h2>All Cars</h2>
		{cars.length === 0 ? (
		<EmptyState message="Nothing here yet" showButton />
		) : (
		<div className="list">
			{cars.map((car) => (
			<CarCard key={car.id} car={car} />
			))}
		</div>
		)}
	</div>
	);
}

export default CarList;