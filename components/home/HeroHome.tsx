import Image from 'next/image';
import Consultation from './Consultation';

const HeroHome = () => {
	return (
		<div className='mt-10 h-screen flex flex-col items-center relative'>
			<Image
				src='/bg/hero-home-bg.svg'
				alt='hero home bg'
				width={1920}
				height={1080}
				className='md:rounded-3xl rounded-xl'
			/>
			<div className='md:top-2/3 md:bottom-auto rounded-xl bottom-[37%] absolute flex flex-col items-center bg-white p-8 shadow-lg'>
				<Consultation />
			</div>
		</div>
	);
};

export default HeroHome;
