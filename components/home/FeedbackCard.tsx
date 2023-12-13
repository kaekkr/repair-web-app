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
		<div className='md:space-y-7 md:px-5 space-y-5 flex-[0_0_70%] py-8 px-4 flex flex-col justify-between bg-white rounded-2xl'>
			<div className='h-1/2 flex flex-col justify-between space-y-3'>
				<div className='flex justify-between items-center'>
					<div className='md:space-x-3 space-x-2 flex items-center'>
						<Image
							src='icons/thumb-up-emoji-icon.svg'
							alt='thumb up emoji'
							width={25}
							height={25}
						/>
						<h2 className='font-bold'>{title}</h2>
					</div>
					<h3 className='text-[#6E6E6E]'>{date}</h3>
				</div>
				<p className='max-w-[16rem] md:leading-5'>
					{body}
				</p>
			</div>
			<div className='flex space-x-3'>
				<Image
					src='icons/people-icon-2-black.svg'
					alt='people icon 2'
					width={15}
					height={15}
				/>
				<h3 className='text-[#6E6E6E] uppercase'>
					{name}
				</h3>
			</div>
		</div>
	);
};

export default FeedbackCard;
