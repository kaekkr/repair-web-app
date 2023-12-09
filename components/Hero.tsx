import Image from 'next/image';
import Consultation from './Consultation';

const Hero = () => {
	return (
		<div className='mt-5 h-screen flex flex-col items-center relative'>
			<Image
				src='/hero-bg.svg'
				alt=''
				width={1}
				height={1}
				className='w-full h-auto'
			/>
			<div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white p-8'>
				<Consultation />
			</div>
		</div>
	);
};

export default Hero;
