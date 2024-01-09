import { Button } from '../../../../common/Button/Button';

const searchBarStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: 5,
};

const itemStyle = {
	margin: 5,
};

export const SearchBar = () => {
	return (
		<div style={searchBarStyle}>
			<div>
				<input placeholder='Input text' style={itemStyle} />
				<Button label={'Search'} style={itemStyle} />
			</div>
			<Button label={'Add new'} />
		</div>
	);
};
