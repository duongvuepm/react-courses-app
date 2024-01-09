import { Courses } from '../Courses/Courses';

// fetch courses here

const courseList = [
	{
		id: 1,
		name: 'Angular',
		description: 'blahblah',
	},
	{
		id: 2,
		name: 'React',
		description: 'blahblah',
	},
	{
		id: 3,
		name: 'ASP .NET',
		description: 'blahblah',
	},
];

export const EmptyCourseList = () => {
	return (
		<div style={{ width: '70%', margin: 'auto', marginTop: 50 }}>
			<Courses courses={courseList} />;
		</div>
	);
};
