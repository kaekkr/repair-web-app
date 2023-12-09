import Image from 'next/image';

interface FeedbackCardProps {
	title: string;
	body: string;
	name: string;
	date: string;
}

const FeedbackCard = ({
	title,
	body,
	name,
	date,
}: FeedbackCardProps) => {
	return (
		<div className='space-y-5 bg-white rounded-md'>
			<div className='flex justify-between'>
				<div className='flex space-x-5'>
					<Image
						src='up-emoji.svg'
						alt='emoji'
						width={20}
						height={20}
					/>
					<h2>{title}</h2>
				</div>
				<h3>{date}</h3>
			</div>
			<p>{body}</p>
			<div className='flex space-x-5'>
				<Image
					src='icons/people-icon-2.svg'
					alt='people icon 2'
					width={15}
					height={15}
				/>
				<h3>{name}</h3>
			</div>
		</div>
	);
};

export default FeedbackCard;
