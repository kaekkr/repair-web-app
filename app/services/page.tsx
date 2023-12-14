import HeroAbout from '@/components/about/HeroAbout';
import Carousel from '@/components/common/Carousel';
import FourCardsAlternate from '@/components/common/FourCardsAlternate';
import WorkOrServiceCard from '@/components/home/WorkOrServiceCard';
import ServicesDescription from '@/components/services/ServicesDescription';
import { brands, services } from '@/data';
import Image from 'next/image';

const ServicesPage = () => {
	return (
		<main className='space-y-20'>
			<HeroAbout />
			<FourCardsAlternate title='Наши услуги'>
				{services.map(service => (
					<WorkOrServiceCard
						key={service.id}
						id={service.id}
						title={service.title}
						body={service.body}
					/>
				))}
			</FourCardsAlternate>
			<ServicesDescription />
			<Carousel
				title='Ремонт всех марок и моделей'
				type='brand'
			>
				{brands.map(brand => {
					return (
						<div
							className='relative h-64 flex-[0_0_50%]'
							key={brand.id}
						>
							<Image
								src={brand.imgSrc}
								alt={brand.imgSrc}
								width={200}
								height={200}
							/>
						</div>
					);
				})}
			</Carousel>
		</main>
	);
};

export default ServicesPage;
