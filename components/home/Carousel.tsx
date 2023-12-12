'use client';

import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps {
	children: React.ReactNode;
	title: string;
	type: string;
}

const Carousel = ({
	children,
	title,
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
			<h1
				className={`${
					type !== 'brand' ? 'text-white' : ''
				} md:max-w-md max-w-xs font-bold`}
			>
				{title}
			</h1>
			<div
				className='overflow-hidden'
				ref={emblaRef}
			>
				<div className='flex md:space-x-10 space-x-10'>{children}</div>
			</div>
		</div>
	);
};

export default Carousel;
