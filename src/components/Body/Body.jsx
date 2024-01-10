import { Courses } from '../Courses/Courses';
import { faker } from '@faker-js/faker';
import { Outlet } from 'react-router-dom';
import { CourseInfo } from '../CourseInfo/CourseInfo';
import { useState } from 'react';

const generateAuthors = (count) => {
	const authors = [];
	for (let i = 0; i < count; i++) {
		authors.push(faker.person.fullName());
	}
	return authors.join(', ');
};

const courseList = [
	{
		id: 1,
		name: 'Angular',
		description: faker.lorem.paragraph(15),
		authors: generateAuthors(1),
		duration: '2:30 hours',
		created: '20.03.2014',
	},
	{
		id: 2,
		name: 'React',
		description: faker.lorem.paragraph(15),
		authors: generateAuthors(3),
		duration: '2:30 hours',
		created: '15.12.2013',
	},
	{
		id: 3,
		name: 'ASP .NET',
		description: faker.lorem.paragraph(15),
		authors: generateAuthors(2),
		duration: '2:30 hours',
		created: '06.07.2012',
	},
];

export const bodyRouter = [
	{
		path: '/',
		element: <Courses courses={courseList} />,
	},
	{
		path: '/course-info',
		element: <CourseInfo course={{}} />,
	},
];
export const Body = () => {
	const [selectedCourse, setSelectedCourse] = useState({});

	return (
		<div style={{ width: '70%', margin: 'auto', marginTop: 50 }}>
			<Outlet context={[selectedCourse, setSelectedCourse]} />
		</div>
	);
};
