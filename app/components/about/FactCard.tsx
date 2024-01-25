import Image from 'next/image';

type FactCardProps = {
	title: string;
	body: string;
	imgSrc: string;
	alt: string;
}

const FactCard = ({
	title,
	body,
	imgSrc,
	alt,
}: FactCardProps) => {
	return (
		<div className='p-8 bg-white rounded-xl space-y-3 flex flex-col items-center'>
			<Image
				src={`${process.env.API_BASE_URL}${imgSrc}`}
				alt={alt}
				width={40}
				height={40}
			/>
			<h2 className='md:text-lg font-bold text-xl'>
				{title}
			</h2>
			<h2 className='max-w-[10rem] text-center text-[#6E6E6E]'>
				{body}
			</h2>
		</div>
	);
};

export default FactCard;
