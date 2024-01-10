import { Button } from '../../../../common/Button/Button';
import { useNavigate, useOutletContext } from 'react-router-dom';

const leftStyle = {
	width: '60%',
};
const rightStyle = {
	marginLeft: 10,
};

export const CourseCard = ({ course }) => {
	const navigate = useNavigate();
	const [, setSelectedCourse] = useOutletContext();
	let showCourseHandler = (event) => {
		setSelectedCourse(course);
		navigate('/course-info');
	};

	return (
		<div>
			<div id={'courseHeader'}>
				<h3>{course.name}</h3>
			</div>
			<div id={'courseInfo'} style={{ display: 'flex' }}>
				<div style={leftStyle}>
					<p>{course.description}</p>
				</div>
				<div style={rightStyle}>
					<p>
						<strong>Authors: </strong> {course.authors}
					</p>
					<p>
						<strong>Duration: </strong> {course.duration}
					</p>
					<p>
						<strong>Created: </strong> {course.created}
					</p>
					<div>
						<Button label={'Show course'} handler={showCourseHandler} />
						<Button label={'Delete'} />
						<Button label={'Edit'} />
					</div>
				</div>
			</div>
		</div>
	);
};
