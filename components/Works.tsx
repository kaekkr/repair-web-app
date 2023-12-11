import { works } from '@/data';
import WorkCard from './WorkCard';

const Works = () => {
	return (
		<div className='flex flex-col items-center space-y-10'>
			<h1 className='font-bold'>Как мы работаем</h1>
			<div className='flex space-x-5'>
				{works.map((work, idx) => (
					<WorkCard
						key={idx}
						title={work.title}
						body={work.body}
					/>
				))}
			</div>
		</div>
	);
};

export default Works;
