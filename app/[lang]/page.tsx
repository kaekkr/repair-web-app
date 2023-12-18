import Carousel from '@/app/components/common/Carousel';
import FormCard from '@/app/components/common/FormCard';
import FourCard from '@/app/components/common/FourCard';
import FourCards from '@/app/components/common/FourCards';
import FourCards2 from '@/app/components/common/FourCards2';
import Hero from '@/app/components/common/Hero';
import FeedbackCard from '@/app/components/home/FeedbackCard';
import MasterCard from '@/app/components/home/MasterCard';
import WorkOrServiceCard from '@/app/components/home/WorkOrServiceCard';
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

export async function generateMetadata(
	{ params }: { params: { lang: string } },
	parent: ResolvingMetadata
): Promise<Metadata> {
	const mainPageData = await getMainPageData(
		params.lang
	);

	const title = mainPageData.meta_title;
	const description =
		mainPageData.meta_description;
	const keywords = mainPageData.meta_keywords;

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
	const mainPageData = await getMainPageData(
		lang
	);

	return (
		<main className='md:space-y-20 space-y-14'>
			<Hero imgSrc={mainPageData.banner.image}>
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
				{advantages.map(advantage => (
					<FourCard
						key={advantage.id}
						title={advantage.title}
						body={advantage.body}
						imgSrc={advantage.imgSrc}
						type={advantage.type}
					/>
				))}
			</FourCards>
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
			<Carousel
				title='Что думают наши клиенты?'
				type=''
			>
				{feedbacks.map(feedback => (
					<FeedbackCard
						key={feedback.id}
						title={feedback.title}
						body={feedback.body}
						name={feedback.name}
						date={feedback.date}
					/>
				))}
			</Carousel>
			<FourCards2 title='Как мы работаем'>
				{works.map(work => (
					<WorkOrServiceCard
						key={work.id}
						id={work.id}
						title={work.title}
						body={work.body}
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
