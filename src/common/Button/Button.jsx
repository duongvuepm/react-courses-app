export const Button = ({ label, isUpper = true, handler }) => {
	return (
		<button onClick={handler}>{isUpper ? label.toUpperCase() : label}</button>
	);
};
