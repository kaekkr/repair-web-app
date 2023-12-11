import Advantages from '@/components/Advantages';
import Carousel from '@/components/Carousel';
import Hero from '@/components/Hero';
import Works from '@/components/Works';
import { brands, feedbacks, masters } from '@/data';

export default function Home() {
	return (
		<main className='space-y-20'>
			<Hero />
			<Advantages />
			<Carousel
				title='Ремонт всех марок и моделей'
				type='brand'
				content={brands}
			/>
			<Carousel
				title='Что думают наши клиенты?'
				type='feedback'
				content={feedbacks}
			/>
			<Works />
			<Carousel
				title='Наши мастера'
				type='master'
				content={masters}
			/>
		</main>
	);
}
