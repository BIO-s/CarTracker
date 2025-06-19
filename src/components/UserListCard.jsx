import Button from './Button';

function UserListCard({ user }) {
	return (
	<div className="card">
		<h3>{user.name}</h3>
		<p>{user.email}</p>
		<Button>Details</Button>
	</div>
	);
}

export default UserListCard;