import Card from './Card';

interface AdvantagesProps {
	title: string;
}

const Advantages = ({
	title,
}: AdvantagesProps) => {
	return (
		<div className='flex flex-col items-center space-y-10'>
			<h1 className='font-bold'>{title}</h1>
			<div className='flex space-x-5'>
				<Card
					title='Бесплатное диагностика'
					text='Наши мастера обладают высокой квалификацией и опытом в области ремонта бытовой техники.'
					imgSrc='icons/diagnostic-icon.svg'
				/>
				<Card
					title='Профи 
мастеры'
					text='Наши мастера обладают высокой квалификацией и опытом в области ремонта бытовой техники.'
					imgSrc='icons/people-icon-2.svg'
				/>
				<Card
					title='Отзывы 
клиентов'
					text='Наши клиенты доверяют нам, оставляя положительные отзывы, которые подтверждают качество наших услуг.'
					imgSrc='icons/message-icon.svg'
				/>
				<Card
					title='Гарантия качества'
					text='Предоставляем гарантию на выполненные работы и установленные запчасти, обеспечивая долгосрочную надежность ремонта на год.'
					imgSrc='icons/guard-icon.svg'
				/>
			</div>
		</div>
	);
};

export default Advantages;
