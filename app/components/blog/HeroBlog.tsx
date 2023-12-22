import Image from 'next/image';

type HeroBlogProps = {
	imgSrc: string;
	title: string;
};

const HeroBlog = ({
	imgSrc,
	title,
}: HeroBlogProps) => {
	return (
		<div className='mt-10 md:h-screen md:space-y-0 space-y-14 flex flex-col items-center relative'>
			<Image
				src={imgSrc}
				alt='hero blog bg'
				width={1920}
				height={1080}
				className='md:rounded-3xl rounded-xl'
			/>
			<div className='md:top-2/3 md:absolute text-white flex flex-col items-center bg-yellow-500 px-6 py-9 rounded-3xl max-w-xl'>
				<h1 className='font-bold text-3xl max-w-[30rem]'>
					{title}
				</h1>
			</div>
		</div>
	);
};

export default HeroBlog;
