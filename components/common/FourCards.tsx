interface FourCardsProps {
	title: string;
	children: React.ReactNode;
}

const FourCards = ({
	title,
	children,
}: FourCardsProps) => {
	return (
		<div className='md:items-center flex flex-col space-y-14'>
			<h1 className='md:max-w-md max-w-[15rem] font-bold'>
				{title}
			</h1>
			<div className='md:flex md:space-x-32 grid grid-rows-2 grid-cols-2 gap-4'>
				{children}
			</div>
		</div>
	);
};

export default FourCards;
