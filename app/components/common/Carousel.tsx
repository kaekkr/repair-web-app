'use client';

import {
	EmblaCarouselType,
} from 'embla-carousel';
import useEmblaCarousel from "embla-carousel-react";

import {
	useCallback,
	useEffect,
	useState,
} from 'react';

type CarouselProps = {
	children: React.ReactNode[];
	title?: string;
	body?: string;
	type: string;
	style?: object;
};

const Carousel = ({
	children,
	title,
	body,
	type,
	style,
}: CarouselProps) => {
	let options;
	if (typeof window !== 'undefined') {
		if (window.innerWidth < 768) {
			options =
				type === 'brand' || type === 'button'
					? { dragFree: true }
					: {};
		} else {
			options = { dragFree: true };
		}
	}
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
				type !== 'brand' &&
				type !== 'button' &&
				'bg-yellow-500 py-12 rounded-2xl px-4 space-y-10'
			} ${
				type === 'brand' &&
				'md:h-auto h-52 space-y-5'
			} md:items-center md:space-y-20 flex flex-col`}
			style={style}
		>
			{title && (
				<div className='space-y-3'>
					<h1
						className={`${
							type !== 'brand' ? 'text-white' : ''
						} md:max-w-lg md:text-center max-w-xs font-bold`}
					>
						{title}
					</h1>
					{body && (
						<h2 className='md:text-lg md:text-center text-white max-w-lg'>
							{body}
						</h2>
					)}
				</div>
			)}
			<div
				className='overflow-hidden max-w-[100%]'
				ref={emblaRef}
			>
				<div className='flex space-x-5'>
					{children}
				</div>
			</div>
			{type !== 'brand' && type !== 'button' && (
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
