import Card from './Card';
import { advantages } from '@/data/advantages';

const Advantages = () => {
	return (
		<div className='flex flex-col items-center space-y-10'>
			<h1 className='font-bold'>
				Почему вы должны выбрать нас ?
			</h1>
			<div className='flex space-x-8'>
				{advantages.map(advantage => (
					<Card
						key={advantage.id}
						title={advantage.title}
						body={advantage.body}
						imgSrc={advantage.imgSrc}
						type={advantage.type}
					/>
				))}
			</div>
		</div>
	);
};

export default Advantages;
