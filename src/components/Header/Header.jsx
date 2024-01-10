import { MyButton } from '../../common/Button/MyButton';
import { Logo } from './components/Logo/Logo';

const headerStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: 10,
	backgroundColor: '#f5f5f5',
	height: 50,
};

export const Header = () => {
	return (
		<div style={headerStyle}>
			<Logo
				imgSrc={
					'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png'
				}
			/>
			<MyButton label={'Logout'} />
		</div>
	);
};
