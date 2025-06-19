import UserListCard from './UserListCard';
import EmptyState from './EmptyState';

function UserList({ users }) {
	return (
	<div className="userList">
		<h2>Users</h2>
		{users.length === 0 ? (
		<EmptyState message="Nothing here yet" />
		) : (
		<div className="list">
			{users.map((user) => (
			<UserListCard key={user.id} user={user} />
			))}
		</div>
		)}
	</div>
	);
}

export default UserList;