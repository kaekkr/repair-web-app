import Advantages from '@/components/Advantages';
import Brands from '@/components/Brands';
import Carousel from '@/components/Carousel';
import Hero from '@/components/Hero';
import WorkCard from '@/components/WorkCard';
import { feedbacks } from '@/data/feedbacks';
import { works } from '@/data/works';
import { masters } from '@/data/masters';

export default function Home() {
	return (
		<main className='space-y-20'>
			<Hero />
			<Advantages title='Почему вы должны выбрать нас ?' />
			<Brands />
			<Carousel
				title='Что думает наши клиенты?'
				type='feedback'
				content={feedbacks}
			/>
			<div>
				<h1>Как мы работаем</h1>
				<div className='flex space-x-5'>
					{works.map(work => (
						<WorkCard
							title={work.title}
							body={work.body}
						/>
					))}
				</div>
			</div>
			<Carousel
				title='Наши мастера'
				type='master'
				content={masters}
			/>
		</main>
	);
}
