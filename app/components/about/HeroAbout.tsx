import Image from 'next/image';

type HeroAboutProps = {
	imgSrc: string;
	title: string;
	description: string;
};

const HeroAbout = ({
	imgSrc,
	title,
	description,
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
			{/* <Image
				src={imgSrc}
				alt='hero about bg'
				width={1920}
				height={1080}
				className='md:rounded-3xl rounded-2xl'
			/> */}
			<div className='md:px-6 md:py-12 md:top-1/4 md:left-[62%] md:absolute text-white bg-yellow-500 py-8 px-4 rounded-3xl max-w-2xl h-[18rem]'>
				<div className='md:space-y-7 space-y-4'>
					<h1 className='md:text-3xl font-bold'>
						{title}
					</h1>
					<h2 className='md:text-xl'>
						{description}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default HeroAbout;
