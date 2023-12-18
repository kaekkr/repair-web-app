interface FourCardsProps {
	title: string;
	body?: string;
	children: React.ReactNode;
	style?: object;
}

const FourCards = ({
	title,
	body,
	children,
	style,
}: FourCardsProps) => {
	return (
		<div
			className={`md:items-center md:space-y-14 flex flex-col space-y-10`}
			style={style}
		>
			<div className='md:text-center space-y-3'>
				<h1 className='md:max-w-md max-w-[15rem] font-bold'>
					{title}
				</h1>
				{body && (
					<h3 className='text-[#6E6E6E] text-base'>
						{body}
					</h3>
				)}
			</div>
			<div className='md:flex md:space-x-32 grid grid-rows-2 grid-cols-2 gap-4'>
				{children}
			</div>
		</div>
	);
};

export default FourCards;
