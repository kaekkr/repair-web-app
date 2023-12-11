import Image from 'next/image';

const Footer = () => {
	return (
		<footer className='md:space-y-10 space-y-5 mt-10'>
			<h1 className='md:text-center font-bold'>
				Наши контакты
			</h1>
			<Image
				src='/footer-bg.svg'
				alt='footer bg'
				width={1920}
				height={1080}
				className='md:block rounded-[2rem] hidden'
			/>
			<Image
				src='/footer-2-bg.svg'
				alt='footer bg'
				width={1920}
				height={1080}
				className='md:hidden rounded-[2rem]'
			/>
		</footer>
	);
};

export default Footer;
