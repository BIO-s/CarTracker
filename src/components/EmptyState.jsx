import { useNavigate } from 'react-router-dom';
import Button from './Button';

function EmptyState({ message, showButton }) {
	const navigate = useNavigate();

	const handleAddCarClick = () => {
	navigate('/cars/add');
	};

	return (
	<div className="empty">
		<p>{message}</p>
		{showButton && <Button onClick={handleAddCarClick}>Add a car</Button>}
	</div>
	);
}

export default EmptyState;