import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteCar } from '../store/carsSlice';
import Button from './Button';
import ConfirmDialog from './ConfirmDialog';

function CarCard({ car, userId: propUserId }) {
	const navigate = useNavigate();
	const location = useLocation();
	const { userId, carId } = useParams();
	const dispatch = useDispatch();
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const isCarDetailsPage = location.pathname === `/cars/${car.id}`;
	const isUserCarDetailsPage = userId && carId && location.pathname === `/users/${userId}/cars/${carId}`;

	const handleDetailsClick = () => {
	if (propUserId) {
		navigate(`/users/${propUserId}/cars/${car.id}`);
	} else {
		navigate(`/cars/${car.id}`);
	}
	};

	const handleEditClick = () => {
		navigate(`/cars/${car.id}/edit`);
	};

	const handleDeleteClick = () => {
		setIsDialogOpen(true);
	};

	const handleConfirmDelete = () => {
		setIsDialogOpen(false);
	dispatch(deleteCar(car.id));
	};

	const handleCancelDelete = () => {
		setIsDialogOpen(false);
	};

	return (
	<div className="card">
		<h3>{car.manufacturer} {car.model}</h3>
		<p>Color: {car.color}</p>
		<p>VIN: {car.vin}</p>
		<p>Price: ${car.price}</p>
		<p>Is New: {car.isNew ? 'Yes' : 'No'}</p>
		<div>
		{!(isCarDetailsPage || isUserCarDetailsPage) && (
			<Button onClick={handleDetailsClick}>Details</Button>
		)}
		<Button onClick={handleEditClick}>Edit</Button>
		<Button onClick={handleDeleteClick}>Delete</Button>
		{isDialogOpen && (
			<ConfirmDialog
			message="Are you sure you want to delete this car?"
			onConfirm={handleConfirmDelete}
			onCancel={handleCancelDelete}
			/>
		)}
		</div>
	</div>
	);
}

export default CarCard;