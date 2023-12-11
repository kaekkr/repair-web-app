import Image from 'next/image';
import Consultation from './Consultation';

const Hero = () => {
	return (
		<div className='mt-10 h-screen flex flex-col items-center relative'>
			<Image
				src='/hero-bg.svg'
				alt='hero bg'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				className='rounded-[2rem]'
			/>
			<div className='absolute flex flex-col items-center bg-white p-8 rounded-3xl top-1/4'>
				<Consultation />
			</div>
		</div>
	);
};

export default Hero;
