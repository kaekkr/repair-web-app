import Carousel from '@/app/components/common/Carousel';
import FourCards2 from '@/app/components/common/FourCards2';
import ServiceCard from '@/app/components/common/ServiceCard';
import HeroServices from '@/app/components/services/HeroServices';
import ServicesDescription from '@/app/components/services/ServicesDescription';
import { brands } from '@/data';
import { ServicesPageData } from '@/types';
import { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '../dictionaries';

async function getServicesPageData(
	lang: string
): Promise<ServicesPageData> {
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

export async function generateMetadata({
	params: { lang },
}: {
	params: { lang: string };
}): Promise<Metadata> {
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

const ServicesPage = async ({
	params: { lang },
}: {
	params: { lang: string };
}) => {
	const { banner, services } =
		await getServicesPageData(lang);
	const { buttons, servicesPage, markTitle } =
		await getDictionary(lang);

	return (
		<main className='space-y-20'>
			<HeroServices
				imgSrc={banner.image}
				heroTitle={servicesPage.heroTitle}
				heroDescription={
					servicesPage.heroDescription
				}
			/>
			<FourCards2
				title={servicesPage.serviceTitle}
				style={{ marginTop: '10rem' }}
			>
				{services.map((service, i) => (
					<ServiceCard
						key={service.id}
						title={service.title}
						body={service.description}
						type={i + 1}
						buttons={buttons}
					/>
				))}
			</FourCards2>
			<ServicesDescription
				title={
					servicesPage.serviceDescription.title
				}
				buttons={servicesPage.serviceDescription.buttons}
			/>
			<Carousel title={markTitle} type='brand'>
				{/* {marks.map(mark => {
					return (
						<div
							className='md:flex-[0_0_20%] relative flex-[0_0_50%]'
							key={mark.id}
						>
							<Image
								src={mark.image}
								alt={mark.alt}
								width={300}
								height={300}
							/>
						</div>
					);
				})} */}
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
