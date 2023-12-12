import Image from 'next/image';
import Consultation from './Consultation';

const HeroHome = () => {
	return (
		<div className='mt-10 h-screen flex flex-col items-center relative'>
			<Image
				src='/bg/hero-bg.svg'
				alt='hero bg'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				className='rounded-[2rem]'
			/>
			<div className='md:top-1/4 md:bottom-auto bottom-0 absolute flex flex-col items-center bg-white p-8 rounded-3xl'>
				<Consultation />
			</div>
		</div>
	);
};

export default HeroHome;
