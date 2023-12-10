import Image from 'next/image';

interface MasterCardProps {
	name: string;
	body: string;
	location: string;
	experience: string;
	imgSrc: string;
}

const MasterCard = ({
	name,
	body,
	location,
	experience,
	imgSrc,
}: MasterCardProps) => {
	return (
		<div className='bg-white rounded-md p-5 max-w-xs'>
			<div className='flex space-x-5'>
				<Image
					src={imgSrc}
					alt={imgSrc}
					width={30}
					height={30}
				/>
				<div>
					<h2>{name}</h2>
					<h3>{location}</h3>
					<h3>{experience}</h3>
				</div>
			</div>
			<br />
			<div>
				<p>{body}</p>
			</div>
		</div>
	);
};

export default MasterCard;
