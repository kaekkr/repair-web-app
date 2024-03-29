import Image from 'next/image';

type FourCardProps = {
	title: string;
	body: string;
	imgSrc: string;
	type: number;
}

const FourCard = ({
	title,
	body,
	imgSrc,
	type,
}: FourCardProps) => {
	return (
		<div
			className={`md:pb-16 md:px-6 px-3 pt-10 pb-8 bg-white rounded-2xl max-w-[20rem] space-y-5 ${
				type === 2
					? 'bg-yellow-500 text-white'
					: ''
			}`}
		>
			<div className='md:space-x-5 space-x-3 flex'>
				{imgSrc && <Image
					src={`${process.env.API_BASE_URL}${imgSrc}`}
					alt={imgSrc}
					width={30}
					height={30}
				/>}
				<h2 className='font-bold max-w-[5rem]'>
					{title}
				</h2>
			</div>
			<h3
				className={`md:text-sm md:max-w-[15rem] text-xs max-w-[9rem] ${
					type === 1 ? 'text-[#6E6E6E]' : ''
				}`}
			>
				{body}
			</h3>
		</div>
	);
};

export default FourCard;
