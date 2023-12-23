import { washingMachinesBlogs } from '@/data';
import Image from 'next/image';

const SimilarArticles = () => {
	return (
		<div className='space-y-7'>
			<h1 className='font-bold'>
				Похожие статьи
			</h1>
			<div className='space-y-5'>
				{washingMachinesBlogs
					.slice(-3)
					.map(washingMachinesBlog => (
						<div
							key={washingMachinesBlog.id}
							className='bg-white rounded-xl flex space-x-3 items-center p-3'
						>
							<Image
								src={washingMachinesBlog.imgSrc}
								alt={washingMachinesBlog.imgSrc}
								width={1920}
								height={1080}
								className='rounded-2xl w-1/2'
							/>
							<h2 className='font-bold'>
								{washingMachinesBlog.title}
							</h2>
						</div>
					))}
			</div>
		</div>
	);
};

export default SimilarArticles;
