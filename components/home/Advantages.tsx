import { Advantage } from '@/types';
import AdvantageCard from './AdvantageCard';
import { advantages } from '@/data';

const Advantages = () => {
	return (
		<div className='md:items-center flex flex-col space-y-10'>
			<h1 className='md:max-w-md max-w-[15rem] font-bold'>
				Почему вы должны выбрать нас ?
			</h1>
			<div className='md:flex md:space-x-32 grid grid-rows-2 grid-cols-2 gap-4'>
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
