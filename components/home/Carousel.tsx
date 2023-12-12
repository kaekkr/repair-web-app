'use client';

import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps {
	children: React.ReactNode;
	title: string;
	body?: string;
	type: string;
}

const Carousel = ({
	children,
	title,
	body,
	type,
}: CarouselProps) => {
	const [emblaRef] = useEmblaCarousel({
		loop: true,
		dragFree: true,
	});

	return (
		<div
			className={`${
				type !== 'brand'
					? 'bg-yellow-500 py-12 rounded-2xl'
					: ''
			} md:items-center md:space-y-20 px-4 flex flex-col space-y-10`}
		>
			<div className='space-y-3'>
				<h1
					className={`${
						type !== 'brand' ? 'text-white' : ''
					} md:max-w-md md:text-center max-w-xs font-bold`}
				>
					{title}
				</h1>
				{body && <h2 className='text-white max-w-md text-center'>{body}</h2>}
			</div>
			<div
				className='overflow-hidden'
				ref={emblaRef}
			>
				<div className='flex md:space-x-10 space-x-10'>
					{children}
				</div>
			</div>
		</div>
	);
};

export default Carousel;
