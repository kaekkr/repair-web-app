import Image from 'next/image';

interface CardProps {
	title: string;
	text: string;
	imgSrc: string;
}

const Card = ({
	title,
	text,
	imgSrc,
}: CardProps) => {
	return (
		<div className='bg-white rounded-md max-w-xs p-5 space-y-5'>
			<div className='flex space-x-5'>
				<Image
					src={imgSrc}
					alt={imgSrc}
					width={15}
					height={15}
				/>
				<h2 className='font-bold'>{title}</h2>
			</div>
			<p>{text}</p>
		</div>
	);
};

export default Card;
