import Image from 'next/image';

type HeroProps = {
	imgSrc: string;
	children: React.ReactNode;
}

const Hero = ({
	imgSrc,
	children,
}: HeroProps) => {
	return (
		<div className='md:h-screen mt-10 flex flex-col items-center relative'>
			<Image
				src={imgSrc}
				alt={imgSrc}
				width={1920}
				height={1080}
				className='md:rounded-3xl rounded-xl'
			/>
			<div className='lg:top-3/4 md:top-2/3 md:shadow-lg top-[92%] rounded-xl absolute flex flex-col items-center bg-white p-8'>
				{children}
			</div>
		</div>
	);
};

export default Hero;
