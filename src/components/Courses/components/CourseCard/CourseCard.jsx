import { MyButton } from '../../../../common/Button/MyButton';
import { useNavigate, useOutletContext } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

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
		<div style={{ margin: 5 }}>
			<Card border='primary'>
				<Card.Body>
					<Card.Title>
						<h3>{course.name}</h3>
					</Card.Title>
					<Card.Subtitle className='mb-2 text-muted'>
						Card Subtitle
					</Card.Subtitle>
					<Card.Text>
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
								<div style={{ display: 'flex' }}>
									<MyButton label={'Show course'} handler={showCourseHandler} />
									<MyButton label={'Delete'} />
									<MyButton label={'Edit'} />
								</div>
							</div>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
};
