import { Advantage } from '@/types';
import AdvantageCard from './AdvantageCard';
import { advantages } from '@/data';

const Advantages = () => {
	return (
		<div className='flex flex-col items-center space-y-10'>
			<h1 className='font-bold'>
				Почему вы должны выбрать нас ?
			</h1>
			<div className='flex space-x-32'>
				{advantages.map(
					(advantage: Advantage) => (
						<AdvantageCard
							key={advantage.id}
							title={advantage.title}
							body={advantage.body}
							imgSrc={advantage.imgSrc}
							type={advantage.type}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Advantages;
