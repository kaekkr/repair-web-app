import { SimilarArticle } from '@/types';
import Image from 'next/image';

const SimilarArticles = ({
	similar,
}: {
	similar: SimilarArticle[];
}) => {
	return (
		<div className='space-y-7'>
			<h1 className='font-bold'>
				Похожие статьи
			</h1>
			<div className='space-y-5'>
				{similar
					.slice(-3)
					.map(similar => (
						<div
							key={similar.id}
							className='bg-white rounded-xl flex space-x-3 items-center p-3'
						>
							<Image
								src={similar.image}
								alt={similar.image}
								width={1920}
								height={1080}
								className='rounded-2xl w-1/2'
							/>
							<h2 className='font-bold'>
								{similar.title}
							</h2>
						</div>
					))}
			</div>
		</div>
	);
};

export default SimilarArticles;
