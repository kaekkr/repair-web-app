interface ServiceDescriptionCardProps {
	title: string;
	price: string;
}

const ServiceDescriptionCard = ({
	title,
	price,
}: ServiceDescriptionCardProps) => {
	return (
		<div className='bg-white rounded-xl flex flex-col justify-between space-y-4 px-4 py-6 max-w-xs'>
			<div className='flex flex-col justify-between h-[80%]'>
				<h2 className='font-bold text-lg w-[70%]'>
					{title}
				</h2>
				<h3 className='text-[#6E6E6E]'>{price}</h3>
			</div>
			<button className='button py-2 w-[70%]'>Позвонить</button>
		</div>
	);
};

export default ServiceDescriptionCard;
