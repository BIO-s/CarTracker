import { useParams, Link } from 'react-router-dom';
import UserListCard from '../components/UserListCard';
import CarCard from '../components/CarCard';

function UserProfilePage({ users, cars }) {
	const { id } = useParams();
	const user = users.find((u) => u.id === parseInt(id));
	const userCars = cars.filter((car) => car.userId === parseInt(id));

	if (!user) return <div>User not found</div>;

	return (
	<div>
		<Link to="/users" className="button back-button">Back</Link>
		<h1>User Profile</h1>
		<UserListCard user={user} />
		<h2>Cars</h2>
		{userCars.length === 0 ? (
		<p>No cars yet</p>
		) : (
		<div className="list">
			{userCars.map((car) => (
			<CarCard key={car.id} car={car} userId={parseInt(id)} />
			))}
		</div>
		)}
	</div>
	);
}

export default UserProfilePage;