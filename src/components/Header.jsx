import { Link, useLocation } from 'react-router-dom';

function Header() {
	const location = useLocation();
	const isHomePage = location.pathname === '/';

	return (
	<header className="header">
		{isHomePage ? (
		<span className="logo">CarTracker</span>
		) : (
		<Link to="/" className="logo">CarTracker</Link>
		)}
		<div className="user">
		<span>Cameron</span>
		<button className="logout">Logout</button>
		</div>
	</header>
	);
}

export default Header;