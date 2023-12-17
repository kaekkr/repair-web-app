import Image from 'next/image';
import Consultation from '../common/FormCard';

const HeroHome = () => {
	return (
		<div className='md:h-screen mt-10 flex flex-col items-center relative'>
			<Image
				src='/bg/hero-home-bg.svg'
				alt='hero home bg'
				width={1920}
				height={1080}
				className='md:rounded-3xl rounded-xl'
			/>
			<div className='lg:top-3/4 md:top-2/3 md:shadow-lg top-[92%] rounded-xl absolute flex flex-col items-center bg-white p-8'>
				<Consultation />
			</div>
		</div>
	);
};

export default HeroHome;
