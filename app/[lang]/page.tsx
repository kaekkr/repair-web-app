import Carousel from '@/app/components/common/Carousel';
import FeedbackCard from '@/app/components/common/FeedbackCard';
import FormCard from '@/app/components/common/FormCard';
import FourCard from '@/app/components/common/FourCard';
import FourCards from '@/app/components/common/FourCards';
import FourCards2 from '@/app/components/common/FourCards2';
import Hero from '@/app/components/common/Hero';
import MasterCard from '@/app/components/common/MasterCard';
import {
	advantages,
	brands,
	feedbacks,
	masters,
	works,
} from '@/data';
import { MainPageData } from '@/types';
import {
	Metadata,
	ResolvingMetadata,
} from 'next';
import Image from 'next/image';
import ServiceCard from '../components/common/ServiceCard';

async function getMainPageData(
	lang: string
): Promise<MainPageData> {
	const res = await fetch(
		`http://mepebag547.temp.swtest.ru/api/V1/page/main?lang=${lang}`,
		{ next: { revalidate: 1 } }
	);

	if (!res.ok) {
		throw new Error(
			'Failed to fetch main page data'
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
	} = await getMainPageData(lang);

	return (
		<main className='md:space-y-20 space-y-14'>
			{/* <Hero imgSrc={banner.image}>
				<FormCard
					title='Экспертный ремонт  бытовой  техники в Алмате на дому'
					body='Закажите бесплатную консультацию за несколько минут.
Позвоните по 87022224141 или же напишите нам по ватсапу'
					selectOptions={[
						'Выберите технику',
						'1',
						'2',
						'3',
					]}
				/>
			</Hero> */}
			<Hero imgSrc='/bg/hero-home-bg.svg'>
				<FormCard
					title='Экспертный ремонт  бытовой  техники в Алмате на дому'
					body='Закажите бесплатную консультацию за несколько минут.
Позвоните по 87022224141 или же напишите нам по ватсапу'
					selectOptions={[
						'Выберите технику',
						'1',
						'2',
						'3',
					]}
				/>
			</Hero>
			<FourCards
				title='Почему вы должны выбрать нас ?'
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
			<Carousel
				title='Ремонт всех марок и моделей'
				type='brand'
			>
				{marks.map(mark => {
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
				})}
			</Carousel>
			<Carousel
				title='Что думают наши клиенты?'
				type=''
			>
				{reviews.map(review => (
					<FeedbackCard
						key={review.id}
						title='Test'
						body={review.description}
						name={review.name}
						date={review.date}
					/>
				))}
			</Carousel>
			<FourCards2 title='Как мы работаем'>
				{services.map(service => (
					<ServiceCard
						key={service.id}
						id={service.id}
						title={service.title}
						body={service.description}
					/>
				))}
			</FourCards2>
			<div className='mt-40'>
				<Carousel title='Наши мастера' type=''>
					{masters.map(master => (
						<MasterCard
							key={master.id}
							body={master.body}
							name={master.name}
							location={master.location}
							experience={master.experience}
							imgSrc={master.imgSrc}
						/>
					))}
				</Carousel>
			</div>
		</main>
	);
}
