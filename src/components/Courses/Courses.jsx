import { CourseCard } from './components/CourseCard/CourseCard';
import { SearchBar } from './components/SearchBar/SearchBar';

export const Courses = ({ courses }) => {
	return (
		<div>
			<SearchBar />
			{courses.map((c) => (
				<CourseCard key={c.name} course={c} />
			))}
		</div>
	);
};
