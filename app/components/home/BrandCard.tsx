import Image from 'next/image';

interface BrandCardProps {
	imgSrc: string;
}

const BrandCard = ({
	imgSrc,
}: BrandCardProps) => {
	return (
		<div>
			<Image
				src={imgSrc}
				alt={imgSrc}
				width={200}
				height={200}
			/>
		</div>
	);
};

export default BrandCard;
