import FourCard from '@/components/common/FourCard';
import FourCards from '@/components/common/FourCards';
import Carousel from '@/components/home/Carousel';
import FeedbackCard from '@/components/home/FeedbackCard';
import HeroHome from '@/components/home/HeroHome';
import MasterCard from '@/components/home/MasterCard';
import Works from '@/components/home/Works';
import {
	advantages,
	brands,
	feedbacks,
	masters,
} from '@/data';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='space-y-20'>
			<HeroHome />
			<FourCards title='Почему вы должны выбрать нас ?'>
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
							className='relative h-64 flex-[0_0_20%]'
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
			<Works />
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
