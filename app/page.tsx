import Carousel from '@/components/common/Carousel';
import FormCard from '@/components/common/FormCard';
import Consultation from '@/components/common/FormCard';
import FourCard from '@/components/common/FourCard';
import FourCards from '@/components/common/FourCards';
import FourCards2 from '@/components/common/FourCards2';
import Hero from '@/components/common/Hero';
import FeedbackCard from '@/components/home/FeedbackCard';
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
