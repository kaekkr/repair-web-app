import Image from 'next/image';

interface CardProps {
	title: string;
	body: string;
	imgSrc: string;
	type: number;
}

const Card = ({
	title,
	body,
	imgSrc,
	type,
}: CardProps) => {
	return (
		<div
			className={`bg-white rounded-lg max-w-[15rem] py-8 px-5 space-y-5 ${
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
			<p
				className={`max-w-[15rem] ${
					type === 1 ? 'text-[#6E6E6E]' : ''
				}`}
			>
				{body}
			</p>
		</div>
	);
};

export default Card;
