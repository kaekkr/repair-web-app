type ServiceCardProps = {
	title: string;
	body: string;
	type: number;
	buttons: {
		buttonTitle1: string;
		buttonTitle2: string;
	};
};

const ServiceCard = ({
	title,
	body,
	type,
	buttons,
}: ServiceCardProps) => {
	return (
		<div className='md:py-10 md:px-7 md:space-y-10 space-y-5 py-7 px-4 bg-white rounded-xl max-w-[18rem]'>
			<div className='md:max-h-24 flex space-x-3 max-h-12'>
				<h1 className='md:text-2xl text-base font-bold'>
					{type}.{' '}
				</h1>
				<h1 className='md:text-2xl md:w-4/5 text-sm font-bold h-16'>
					{title}
				</h1>
			</div>
			<h3 className='md:leading-5 text-[#6E6E6E] max-w-[18rem]'>
				{body}
			</h3>
			{type === 1 && (
				<div className='md:space-y-5 space-y-2 text-center'>
					<button className='button w-full py-2'>
						{buttons.buttonTitle1}
					</button>
					<button className='underline text-yellow-500'>
						{buttons.buttonTitle2}
					</button>
				</div>
			)}
		</div>
	);
};

export default ServiceCard;
