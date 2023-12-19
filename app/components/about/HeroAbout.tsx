import Image from 'next/image';

interface HeroAboutProps {
	imgSrc: string;
	alt: string;
}

const HeroAbout = ({
	imgSrc,
	alt,
}: HeroAboutProps) => {
	return (
		<div className='md:h-screen md:space-y-0 mt-10 flex flex-col items-center relative space-y-14'>
			<Image
				src='/bg/hero-about-bg.svg'
				alt='hero about bg'
				width={1920}
				height={1080}
				className='md:rounded-3xl rounded-2xl'
			/>
			<div className='md:px-6 md:py-12 md:top-1/4 md:right-[62%] md:absolute text-white bg-yellow-500 py-8 px-4 rounded-3xl max-w-2xl h-[18rem]'>
				<div className='md:space-y-7 space-y-4'>
					<h1 className='md:text-3xl font-bold'>
						Приветствуем вас в мире надежного
						ремонта бытовой техники !{' '}
					</h1>
					<h2 className='md:text-xl'>
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
