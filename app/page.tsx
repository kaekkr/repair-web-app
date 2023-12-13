import Carousel from '@/components/common/Carousel';
import FourCard from '@/components/common/FourCard';
import FourCards from '@/components/common/FourCards';
import FourCardsAlternate from '@/components/common/FourCardsAlternate';
import FeedbackCard from '@/components/home/FeedbackCard';
import HeroHome from '@/components/home/HeroHome';
import MasterCard from '@/components/home/MasterCard';
import WorkOrServiceCard from '@/components/home/WorkOrServiceCard';
import {
	advantages,
	brands,
	feedbacks,
	masters,
	works,
} from '@/data';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='md:space-y-20 space-y-14'>
			<HeroHome />
			<FourCards
				title='Почему вы должны выбрать нас ?'
				style={{ marginTop: '28rem' }}
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
			<FourCardsAlternate title='Как мы работаем'>
				{works.map(work => (
					<WorkOrServiceCard
						key={work.id}
						id={work.id}
						title={work.title}
						body={work.body}
					/>
				))}
			</FourCardsAlternate>
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
		</main>
	);
}
