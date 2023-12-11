'use client';

import useEmblaCarousel from 'embla-carousel-react';

import { Master, Feedback, Brand } from '@/types';
import FeedbackCard from './FeedbackCard';
import MasterCard from './MasterCard';
import BrandCard from './BrandCard';

interface CarouselProps {
	title: string;
	type: string;
	content: Feedback[] | Master[] | Brand[];
}

const Carousel = ({
	title,
	type,
	content,
}: CarouselProps) => {
	const [emblaRef] = useEmblaCarousel({
		loop: true,
	});

	const renderCard = (
		con: Feedback | Master | Brand,
		index: number
	) => {
		switch (type) {
			case 'feedback':
				return (
					<FeedbackCard
						key={index}
						title={(con as Feedback).title}
						body={(con as Feedback).body}
						name={(con as Feedback).name}
						date={(con as Feedback).date}
					/>
				);
			case 'master':
				return (
					<MasterCard
						key={index}
						name={(con as Master).name}
						body={(con as Master).body}
						location={(con as Master).location}
						experience={
							(con as Master).experience
						}
						imgSrc={(con as Master).imgSrc}
					/>
				);
			case 'brand':
				return (
					<BrandCard
						key={index}
						imgSrc={(con as Brand).imgSrc}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<div
			className={`${
				type !== 'brand'
					? 'bg-yellow-500 py-12 rounded-2xl'
					: ''
			} flex flex-col items-center space-y-10`}
		>
			<h1
				className={`${
					type !== 'brand' ? 'text-white' : ''
				} font-bold`}
			>
				{title}
			</h1>
			<div ref={emblaRef}>
				<div className='flex space-x-20'>
					{content.map(con =>
						renderCard(con, con.id)
					)}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
