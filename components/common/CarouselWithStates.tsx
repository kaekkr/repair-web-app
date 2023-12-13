'use client';

import useEmblaCarousel from 'embla-carousel-react';
import { useState } from 'react';

interface CarouselWithStatesProps {
	children: React.ReactNode;
}

const CarouselWithStates = ({
	children,
}: CarouselWithStatesProps) => {
	const [emblaRef] = useEmblaCarousel({
		loop: true,
		dragFree: true,
	});

	return (
		<div
			className='overflow-hidden space-y-3'
			ref={emblaRef}
		>
			<div className='flex justify-between'>
				{children}
			</div>
			<hr className='border-[#6E6E6E]' />
		</div>
	);
};

export default CarouselWithStates;
