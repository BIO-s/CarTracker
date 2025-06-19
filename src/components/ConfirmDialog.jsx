import { useState } from 'react';
import Button from './Button';

function ConfirmDialog({ message, onConfirm, onCancel }) {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) return null;

	return (
	<div className="modal">
		<div className="modal-content">
		<p>{message}</p>
		<div>
			<Button onClick={() => { onConfirm(); setIsVisible(false); }}>Yes</Button>
			<Button onClick={() => { onCancel(); setIsVisible(false); }}>No</Button>
		</div>
		</div>
	</div>
	);
}

export default ConfirmDialog;