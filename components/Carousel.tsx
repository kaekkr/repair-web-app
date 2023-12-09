'use client';

import { Master, Feedback } from '@/types';
import useEmblaCarousel from 'embla-carousel-react';
import FeedbackCard from './FeedbackCard';
import MasterCard from './MasterCard';

interface CarouselProps {
	title: string;
	type: string;
	content: Feedback[] | Master[];
}

const Carousel = ({
	title,
	type,
	content,
}: CarouselProps) => {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div className='bg-yellow-500'>
			<h1>{title}</h1>
			<div ref={emblaRef}>
				<div className='flex space-x-5'>
					{content.map(con => {
						if (type === 'feedback') {
							return (
								<FeedbackCard
									title={con.title}
									body={con.body}
									name={con.name}
									date={con.date}
								/>
							);
						} else {
							return <MasterCard />;
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
