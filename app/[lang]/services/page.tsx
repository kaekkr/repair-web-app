import HeroAbout from '@/app/components/about/HeroAbout';
import Carousel from '@/app/components/common/Carousel';
import FourCards2 from '@/app/components/common/FourCards2';
import WorkOrServiceCard from '@/app/components/home/WorkOrServiceCard';
import ServicesDescription from '@/app/components/services/ServicesDescription';
import { brands, services } from '@/data';
import Image from 'next/image';

const ServicesPage = ({
	params: { lang },
}: {
	params: { lang: string };
}) => {
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
