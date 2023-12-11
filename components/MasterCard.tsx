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
		<div className='bg-white rounded-xl py-7 px-3 max-w-sm space-y-5'>
			<div className='flex space-x-7 px-8'>
				<Image
					src={imgSrc}
					alt={imgSrc}
					width={80}
					height={30}
				/>
				<div className='space-y-4'>
					<h2 className='font-bold'>{name}</h2>
					<div className='space-y-[0.15rem]'>
						<div className='flex items-center space-x-3'>
							<Image
								src='icons/marker-icon.svg'
								alt='marker icon'
								width={12}
								height={12}
							/>
							<h3 className='text-[#6E6E6E]'>
								{location}
							</h3>
						</div>
						<div className='flex items-center space-x-2'>
							<Image
								src='icons/work-icon.svg'
								alt='marker icon'
								width={15}
								height={15}
							/>
							<h3 className='text-[#6E6E6E]'>
								Опыт работы: {experience}
							</h3>
						</div>
					</div>
				</div>
			</div>
			<hr className='border-black' />
			<p className='w-[60%] leading-5 px-8'>{body}</p>
		</div>
	);
};

export default MasterCard;
