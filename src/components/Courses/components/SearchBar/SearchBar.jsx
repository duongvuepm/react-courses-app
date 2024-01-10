import { MyButton } from '../../../../common/Button/MyButton';

const searchBarStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: 5,
};

const groupStyle = {
	display: 'flex',
};

const itemStyle = {
	margin: 5,
};

export const SearchBar = ({ inputHandler = () => {} }) => {
	return (
		<div style={searchBarStyle}>
			<div style={groupStyle}>
				<input
					placeholder='Input text'
					style={itemStyle}
					onKeyUp={(e) => {
						inputHandler(e.target.value);
					}}
				/>
				<MyButton label={'Search'} style={itemStyle} />
			</div>
			<MyButton label={'Add new'} />
		</div>
	);
};
