import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import UserListCard from '../components/UserListCard';
import CarCard from '../components/CarCard';
import { fetchUserCars } from '../store/carsSlice';

function UserProfilePage({ users }) {
	const { id } = useParams();
	const dispatch = useDispatch();
	const user = users.find((u) => u.id === id);
	const { cars, status, error } = useSelector((state) => state.cars);

	useEffect(() => {
		if (id) {
			dispatch(fetchUserCars(id));
		}
	}, [dispatch, id]);

	if (!user) return <div>User not found</div>;
	if (status === 'loading') return <div>Loading cars...</div>;
	if (status === 'failed') return <div>Error loading cars: {error}</div>;

	return (
		<div>
			<Link to="/users" className="button back-button">Back</Link>
			<h1>User Profile</h1>
			<UserListCard user={user} />

			<h2>Cars</h2>
			{cars.length === 0 ? (
				<p>No cars yet</p>
			) : (
				<div className="list">
					{cars.map((car) => (
						<CarCard key={car.id} car={car} userId={id} />
					))}
				</div>
			)}
		</div>
	);
}

export default UserProfilePage;