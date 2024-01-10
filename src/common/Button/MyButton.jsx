import Button from 'react-bootstrap/Button';

export const MyButton = ({ label, isUpper = true, handler }) => {
	return (
		<div style={{ margin: 3 }}>
			<Button variant='primary' onClick={handler}>
				{isUpper ? label.toUpperCase() : label}
			</Button>
		</div>
	);
};
