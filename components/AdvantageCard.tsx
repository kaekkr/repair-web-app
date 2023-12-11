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
			className={`bg-white rounded-2xl max-w-[15rem] py-10 px-6 space-y-5 ${
				type === 2
					? 'bg-yellow-500 text-white'
					: ''
			}`}
		>
			<div className='flex space-x-5'>
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
				className={`max-w-[15rem] ${
					type === 1 ? 'text-[#6E6E6E]' : ''
				}`}
			>
				{body}
			</h3>
		</div>
	);
};

export default AdvantageCard;
