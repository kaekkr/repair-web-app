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

	const isFeedback = (
		item: Feedback | Master
	): item is Feedback => {
		return type === 'feedback';
	};

	return (
		<div className='bg-yellow-500'>
			<h1>{title}</h1>
			<div ref={emblaRef}>
				<div className='flex space-x-5'>
					{content.map(con => {
						if (isFeedback(con)) {
							return (
								<FeedbackCard
									key={con.id}
									title={con.title}
									body={con.body}
									name={con.name}
									date={con.date}
								/>
							);
						} else {
							return (
								<MasterCard
									key={con.id}
									name={con.name}
									body={con.body}
									location={con.location}
									experience={con.experience}
									imgSrc={con.imgSrc}
								/>
							);
						}
					})}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
