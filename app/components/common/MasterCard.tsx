import { Tag } from '@/types';
import Image from 'next/image';

type MasterCardProps = {
	name: string;
	tags: Tag[];
	location: string;
	experience: string;
	imgSrc: string;
}

const MasterCard = ({
	name,
	tags,
	location,
	experience,
	imgSrc,
}: MasterCardProps) => {
	return (
		<div className='md:flex-[0_0_20%] flex-[0_0_75%] bg-white rounded-2xl py-6 space-y-5'>
			<div className='flex items-center space-x-7 px-3'>
				{imgSrc && <Image
					src={`${process.env.API_BASE_URL}${imgSrc}`}
					alt={imgSrc}
					width={60}
					height={20}
				/>}
				<div className='md:space-y-4 space-y-3'>
					<h2 className='font-bold'>{name}</h2>
					<div className='flex items-center space-x-3'>
						<Image
							src='/icons/marker-icon.svg'
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
							src='/icons/work-icon.svg'
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
			<hr className='border-black' />
			<div className='md:w-[60%] w-3/4 px-7'>
				{tags.map((tag, i) => (
					<p key={i}>{tag.title}</p>
				))}
			</div>
		</div>
	);
};

export default MasterCard;
