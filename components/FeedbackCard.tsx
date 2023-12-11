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
		<div className='md:space-y-7 md:px-5 py-6 px-3 flex flex-col justify-between bg-white rounded-xl'>
			<div className='space-y-4'>
				<div className='flex justify-between'>
					<div className='space-x-3 md:space-x-1 flex items-center'>
						<Image
							src='up-emoji.svg'
							alt='emoji'
							width={20}
							height={20}
						/>
						<h2 className='font-bold'>{title}</h2>
					</div>
					<h3 className='text-[#6E6E6E]'>{date}</h3>
				</div>
				<p className='max-w-[16rem] leading-5'>{body}</p>
			</div>
			<div className='flex space-x-3'>
				<Image
					src='icons/people-icon-2.svg'
					alt='people icon 2'
					width={15}
					height={15}
					className='bg-[#2B303A]'
				/>
				<h3>{name}</h3>
			</div>
		</div>
	);
};

export default FeedbackCard;
