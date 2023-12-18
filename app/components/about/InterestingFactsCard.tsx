import Image from 'next/image';

interface InterestingFactsCardProps {
	title: string;
	body: string;
	imgSrc: string;
}

const InterestingFactsCard = ({
	title,
	body,
	imgSrc,
}: InterestingFactsCardProps) => {
	return (
		<div className='p-8 bg-white rounded-xl space-y-3 flex flex-col items-center'>
			<Image
				src={imgSrc}
				alt={imgSrc}
				width={40}
				height={40}
			/>
			<h2 className='md:text-lg font-bold text-xl'>{title}</h2>
			<h2 className='max-w-[10rem] text-center text-[#6E6E6E]'>{body}</h2>
		</div>
	);
};

export default InterestingFactsCard;
