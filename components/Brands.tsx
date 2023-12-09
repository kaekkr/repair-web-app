'use client';

import useEmblaCarousel from 'embla-carousel-react';

import BrandCard from './BrandCard';

const brands = [
	{
		imgSrc: 'brands/midea.svg',
	},
	{
		imgSrc: 'brands/lg.svg',
	},
	{
		imgSrc: 'brands/beko.svg',
	},
	{
		imgSrc: 'brands/bosch.svg',
	},
	{
		imgSrc: 'brands/electrolux.svg',
	},
	{
		imgSrc: 'brands/samsung.svg',
	},
	{
		imgSrc: 'brands/indesit.svg',
	},
];

const Brands = () => {
	const [emblaRef] = useEmblaCarousel();

	return (
		<div>
			<h1 className='font-bold'>
				Ремонт всех марок и моделей
			</h1>
			<div ref={emblaRef}>
				<div className='flex space-x-5'>
					{brands.map(brand => (
						<BrandCard imgSrc={brand.imgSrc} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Brands;
