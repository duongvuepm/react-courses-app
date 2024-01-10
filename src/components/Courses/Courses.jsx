import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';
import { EmptyCourseList } from '../EmptyCourseList/EmptyCourseList';
import { useState } from 'react';

export const Courses = ({ courses }) => {
	const [searchText, setSearchText] = useState('');
	let finalFilter = courses;

	if (searchText) {
		const titleFilter = courses.filter((c) =>
			c.name.toLowerCase().includes(searchText.toLowerCase())
		);
		finalFilter =
			titleFilter.length === 0
				? courses.filter((c) => c.id.toString() === searchText)
				: titleFilter;
	}
	return (
		<div>
			<SearchBar
				inputHandler={(input) => {
					setSearchText(input);
				}}
			/>
			{finalFilter.length === 0 ? (
				<EmptyCourseList />
			) : (
				finalFilter.map((c) => <CourseCard key={c.name} course={c} />)
			)}
		</div>
	);
};
