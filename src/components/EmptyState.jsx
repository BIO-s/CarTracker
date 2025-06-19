import Button from './Button';

function EmptyState({ message, showButton }) {
	return (
	<div className="empty">
		<p>{message}</p>
		{showButton && <Button>Add a car</Button>}
	</div>
	);
}

export default EmptyState;