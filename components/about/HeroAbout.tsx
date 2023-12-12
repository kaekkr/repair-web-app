import Image from 'next/image';
import Consultation from '../home/Consultation';

const HeroAbout = () => {
	return (
		<div className='mt-10 h-screen flex flex-col items-center relative'>
			<Image
				src='/bg/hero-about-bg.svg'
				alt='hero about bg'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				className='rounded-[2rem]'
			/>
			<div className='md:top-1/4 md:right-[62%] md:bottom-auto text-white bottom-0 absolute flex flex-col items-center bg-yellow-500 px-6 py-12 rounded-3xl max-w-2xl h-[18rem]'>
				<div className='space-y-7'>
					<h1 className='font-bold text-3xl'>
						Приветствуем вас в мире надежного
						ремонта бытовой техники !{' '}
					</h1>
					<h2 className='text-xl'>
						Наша история началась с момента, когда
						группа талантливых профессионалов
						решила объединить свои знания и опыт
						для создания уникальной компании.
					</h2>
				</div>
			</div>
		</div>
	);
};

export default HeroAbout;
