import UserList from '../components/UserList';
import { Link } from 'react-router-dom';

function UsersPage({ users }) {
	return (
	<div>
		<Link to="/" className="button back-button">Back</Link>
		<UserList users={users} />
	</div>
	);
}

export default UsersPage;