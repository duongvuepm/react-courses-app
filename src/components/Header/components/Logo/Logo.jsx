export const Logo = ({ imgSrc }) => {
	return (
		<div>
			<img
				className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
				src={imgSrc}
				alt='Transistor'
				width={158}
				height={48}
			/>
		</div>
	);
};
