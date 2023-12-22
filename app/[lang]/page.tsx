import Carousel from '@/app/components/common/Carousel';
import FormCard from '@/app/components/common/FormCard';
import FourCard from '@/app/components/common/FourCard';
import FourCards from '@/app/components/common/FourCards';
import FourCards2 from '@/app/components/common/FourCards2';
import Hero from '@/app/components/common/Hero';
import MasterCard from '@/app/components/common/MasterCard';
import { brands } from '@/data';
import { MainPageData } from '@/types';
import { Metadata } from 'next';
import Image from 'next/image';
import ServiceCard from '../components/common/ServiceCard';
import { getDictionary } from './dictionaries';
import ReviewCard from '@/app/components/common/ReviewCard';

async function getMainPageData(
	lang: string
): Promise<MainPageData> {
	const res = await fetch(
		`http://mepebag547.temp.swtest.ru/api/V1/page/main?lang=${lang}`
	);

	if (!res.ok) {
		throw new Error(
			'Failed to fetch main page data'
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
	} = await getMainPageData(lang);

	const title = metaTitle;
	const description = metaDescription;
	const keywords = metaKeywords;

	return {
		title,
		description,
		keywords,
	};
}

export default async function MainPage({
	params: { lang },
}: {
	params: { lang: string };
}) {
	const {
		banner,
		why_we: whyWeS,
		marks,
		reviews,
		services,
		masters,
	} = await getMainPageData(lang);
	const {
		buttons,
		inputs,
		mainPage,
		markTitle,
		reviewsTitle,
		mastersTitle
	} = await getDictionary(lang);

	return (
		<main className='md:space-y-20 space-y-14'>
			{/* <Hero imgSrc={banner.image}>
				<FormCard
					title={form.title}
					body={form.description}
					selectOptions={selectOptions}
					buttonTitle={buttons.buttonTitle1}
					inputs={inputs}
				/>
			</Hero> */}
			<Hero imgSrc='/bg/hero-home-bg.svg'>
				<FormCard
					title={mainPage.form.title}
					body={mainPage.form.description}
					selectOptions={mainPage.selectOptions}
					buttonTitle={buttons.buttonTitle1}
					inputsText={inputs}
				/>
			</Hero>
			<FourCards
				title={mainPage.whyWeTitle}
				style={{ marginTop: '20rem' }}
			>
				{whyWeS.map((whyWe, i) => (
					<FourCard
						key={whyWe.id}
						title={whyWe.title}
						body={whyWe.description}
						imgSrc={whyWe.image}
						type={i}
					/>
				))}
			</FourCards>
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
			<Carousel
				title={reviewsTitle}
				type=''
			>
				{reviews.map(review => (
					<ReviewCard
						key={review.id}
						title='Test'
						body={review.description}
						name={review.name}
						date={review.date}
					/>
				))}
			</Carousel>
			<FourCards2 title={mainPage.serviceTitle}>
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
			<div className='mt-40'>
				<Carousel
					title={mastersTitle}
					type=''
				>
					{masters.map(master => (
						<MasterCard
							key={master.id}
							tags={master.tags}
							name={master.name}
							location={master.distance}
							experience={master.experience}
							imgSrc={master.image}
						/>
					))}
				</Carousel>
			</div>
		</main>
	);
}
