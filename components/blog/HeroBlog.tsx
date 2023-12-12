import Image from 'next/image';

const HeroBlog = () => {
	return (
		<div className='mt-10 h-screen flex flex-col items-center relative'>
			<Image
				src='/bg/hero-blog-bg.svg'
				alt='hero blog bg'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				className='rounded-[2rem]'
			/>
			<div className='md:top-2/3 md:bottom-auto text-white bottom-0 absolute flex flex-col items-center bg-yellow-500 px-6 py-9 rounded-3xl max-w-xl'>
				<h1 className='font-bold text-3xl max-w-[30rem]'>
					Полезные Советы по Ремонту и
					Обслуживанию Техники
				</h1>
			</div>
		</div>
	);
};

export default HeroBlog;
