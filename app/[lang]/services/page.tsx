import HeroAbout from '@/app/components/about/HeroAbout';
import Carousel from '@/app/components/common/Carousel';
import FourCards2 from '@/app/components/common/FourCards2';
import ServiceCard from '@/app/components/common/ServiceCard';
import ServicesDescription from '@/app/components/services/ServicesDescription';
import { brands, services } from '@/data';
import {
	Metadata,
	ResolvingMetadata,
} from 'next';
import Image from 'next/image';

async function getServicesPageData(lang: string) {
	const res = await fetch(
		`http://mepebag547.temp.swtest.ru/api/V1/page/service?lang=${lang}`
	);

	if (!res.ok) {
		throw new Error(
			'Failed to fetch services page data'
		);
	}

	return res.json();
}

export async function generateMetadata(
	{
		params: { lang },
	}: { params: { lang: string } },
	parent: ResolvingMetadata
): Promise<Metadata> {
	const {
		meta_title: metaTitle,
		meta_description: metaDescription,
		meta_keywords: metaKeywords,
	} = await getServicesPageData(lang);

	const title = metaTitle;
	const description = metaDescription;
	const keywords = metaKeywords;

	return {
		title,
		description,
		keywords,
	};
}

const ServicesPage = ({
	params: { lang },
}: {
	params: { lang: string };
}) => {
	// const {banner, services} = getServicesPageData(lang);

	return (
		<main className='space-y-20'>
			<HeroAbout />
			<FourCards2 title='Наши услуги'>
				{services.map(service => (
					<ServiceCard
						key={service.id}
						id={service.id}
						title={service.title}
						body={service.body}
					/>
				))}
				{/* {services.map(service => (
					<ServiceCard
						key={service.id}
						id={service.id}
						title={service.title}
						body={service.description}
					/>
				))} */}
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
