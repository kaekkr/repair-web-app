type FourCards2Props = {
	title: string;
	children: React.ReactNode;
	style?: object;
};

const FourCards2 = ({
	title,
	children,
	style,
}: FourCards2Props) => {
	return (
		<div
			className='md:items-center flex flex-col space-y-10'
			style={style}
		>
			<h1 className='font-bold'>{title}</h1>
			<div className='md:flex md:space-x-20 grid grid-rows-2 grid-cols-2 gap-4'>
				{children}
			</div>
		</div>
	);
};

export default FourCards2;
