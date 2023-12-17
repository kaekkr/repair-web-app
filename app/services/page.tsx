import HeroAbout from '@/components/about/HeroAbout';
import Carousel from '@/components/common/Carousel';
import FourCards2 from '@/components/common/FourCards2';
import WorkOrServiceCard from '@/components/home/WorkOrServiceCard';
import ServicesDescription from '@/components/services/ServicesDescription';
import { brands, services } from '@/data';
import Image from 'next/image';

const ServicesPage = () => {
	return (
		<main className='space-y-20'>
			<HeroAbout />
			<FourCards2 title='Наши услуги'>
				{services.map(service => (
					<WorkOrServiceCard
						key={service.id}
						id={service.id}
						title={service.title}
						body={service.body}
					/>
				))}
			</FourCards2>
			<ServicesDescription />
			<Carousel
				title='Ремонт всех марок и моделей'
				type='brand'
			>
				{brands.map(brand => {
					return (
						<div
							className='md:flex-[0_0_20%] relative flex-[0_0_50%]'
							key={brand.id}
						>
							<Image
								src={brand.imgSrc}
								alt={brand.imgSrc}
								width={300}
								height={300}
							/>
						</div>
					);
				})}
			</Carousel>
		</main>
	);
};

export default ServicesPage;
