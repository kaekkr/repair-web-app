import { works } from '@/data';
import WorkCard from './WorkCard';

const Works = () => {
	return (
		<div className='md:items-center flex flex-col space-y-10'>
			<h1 className='font-bold'>Как мы работаем</h1>
			<div className='md:flex md:space-x-20 grid grid-rows-2 grid-cols-2 gap-4'>
				{works.map((work) => (
					<WorkCard
						key={work.id}
						id={work.id}
						title={work.title}
						body={work.body}
					/>
				))}
			</div>
		</div>
	);
};

export default Works;
