import Advantages from '@/components/home/Advantages';
import Carousel from '@/components/home/Carousel';
import FeedbackCard from '@/components/home/FeedbackCard';
import HeroHome from '@/components/home/HeroHome';
import MasterCard from '@/components/home/MasterCard';
import Works from '@/components/home/Works';
import {
	brands,
	feedbacks,
	masters,
} from '@/data';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='space-y-20'>
			<HeroHome />
			<Advantages />
			<Carousel
				title='Ремонт всех марок и моделей'
				type='brand'
			>
				{brands.map(brand => {
					return (
						// 👇 style each individual slide.
						// relative - needed since we use the fill prop from next/image component
						// h-64 - arbitrary height
						// flex[0_0_100%]
						//   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
						//   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
						<div
							className='relative h-64 flex-[0_0_20%]'
							key={brand.id}
						>
							{/* use object-cover + fill since we don't know the height and width of the parent */}
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
