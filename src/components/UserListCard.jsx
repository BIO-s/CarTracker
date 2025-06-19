import { useNavigate, useLocation } from 'react-router-dom';
import Button from './Button';

function UserListCard({ user }) {
	const navigate = useNavigate();
	const location = useLocation();
	const isUserProfilePage = location.pathname === `/users/${user.id}`;

	const handleDetailsClick = () => {
	navigate(`/users/${user.id}`);
	};

	return (
	<div className="card">
		<h3>{user.name}</h3>
		<p>{user.email}</p>
		{!isUserProfilePage && (
		<Button onClick={handleDetailsClick}>Details</Button>
		)}
	</div>
	);
}

export default UserListCard;