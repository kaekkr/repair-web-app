'use client';

import useEmblaCarousel, {
	EmblaCarouselType,
} from 'embla-carousel-react';
import {
	useCallback,
	useEffect,
	useState,
} from 'react';

interface CarouselProps {
	children: React.ReactNode[];
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
	const options =
		type === 'brand' ? { dragFree: true } : {};
	const [emblaRef, emblaApi] =
		useEmblaCarousel(options);

	const [selectedIndex, setSelectedIndex] =
		useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<
		number[]
	>([]);

	const scrollTo = useCallback(
		(index: number) =>
			emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	const onInit = useCallback(
		(emblaApi: EmblaCarouselType) => {
			setScrollSnaps(emblaApi.scrollSnapList());
		},
		[]
	);

	const onSelect = useCallback(
		(emblaApi: EmblaCarouselType) => {
			setSelectedIndex(
				emblaApi.selectedScrollSnap()
			);
		},
		[]
	);

	if (type !== 'brand') {
		useEffect(() => {
			if (!emblaApi) return;

			onInit(emblaApi);
			onSelect(emblaApi);
			emblaApi.on('reInit', onInit);
			emblaApi.on('reInit', onSelect);
			emblaApi.on('select', onSelect);
		}, [emblaApi, onInit, onSelect]);
	}

	return (
		<div
			className={`${
				type !== 'brand'
					? 'bg-yellow-500 py-12 rounded-2xl px-4 space-y-10'
					: 'h-52 space-y-5'
			} md:items-center md:space-y-20 flex flex-col`}
		>
			<div className='space-y-3'>
				<h1
					className={`${
						type !== 'brand' ? 'text-white' : ''
					} md:max-w-md md:text-center max-w-xs font-bold`}
				>
					{title}
				</h1>
				{body && (
					<h2 className='text-white max-w-md text-center'>
						{body}
					</h2>
				)}
			</div>
			<div
				className='overflow-hidden'
				ref={emblaRef}
			>
				<div className='flex space-x-5'>
					{children}
				</div>
			</div>
			{type !== 'brand' && (
				<div className='flex justify-center items-center space-x-4'>
					{scrollSnaps.map((_, index) => (
						<button
							key={index}
							onClick={() => scrollTo(index)}
							className={`p-2 rounded-md touch-manipulation cursor-pointer transition-width duration-300 ease-in-out ${
								index === selectedIndex
									? 'bg-white px-4'
									: 'bg-[#F3F3F3]'
							}`}
						></button>
					))}
				</div>
			)}
		</div>
	);
};

export default Carousel;
