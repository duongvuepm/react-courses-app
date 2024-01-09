export const CourseCard = ({ course }) => {
	return (
		<div>
			<h3>{course.name}</h3>
			<p>{course.description}</p>
		</div>
	);
};
