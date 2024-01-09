export const Button = ({ label, isUpper = true }) => {
	return <button>{isUpper ? label.toUpperCase() : label}</button>;
};
