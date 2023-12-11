import Image from 'next/image';

interface AdvantageCardProps {
	title: string;
	body: string;
	imgSrc: string;
	type: number;
}

const AdvantageCard = ({
	title,
	body,
	imgSrc,
	type,
}: AdvantageCardProps) => {
	return (
		<div
			className={`md:px-6 px-3 py-10 bg-white rounded-2xl max-w-[15rem] space-y-5 ${
				type === 2
					? 'bg-yellow-500 text-white'
					: ''
			}`}
		>
			<div className='md:space-x-5 space-x-3 flex'>
				<Image
					src={imgSrc}
					alt={imgSrc}
					width={30}
					height={30}
				/>
				<h2 className='font-bold max-w-[5rem]'>
					{title}
				</h2>
			</div>
			<h3
				className={`md:text-base text-xs max-w-[15rem] ${
					type === 1 ? 'text-[#6E6E6E]' : ''
				}`}
			>
				{body}
			</h3>
		</div>
	);
};

export default AdvantageCard;
