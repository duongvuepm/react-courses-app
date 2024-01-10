import { MyButton } from '../../common/Button/MyButton';
import { useNavigate, useOutletContext } from 'react-router-dom';

export const CourseInfo = ({ course }) => {
	const navigate = useNavigate();
	const [selectedCourse] = useOutletContext();
	let backHandler = () => {
		navigate('/');
	};

	return (
		<div>
			<MyButton label={'Back'} handler={backHandler} />
			<h1>{selectedCourse.name}</h1>
			<p>{selectedCourse.description}</p>
		</div>
	);
};
