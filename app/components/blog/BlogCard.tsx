import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface BlogCardProps {
	id: number;
	title: string;
	body?: string;
	type: string;
	imgSrc: string;
	date: string;
}

const BlogCard = ({
	id,
	title,
	body,
	type,
	imgSrc,
	date,
}: BlogCardProps) => {
	const router = useRouter();

	return (
		<div
			onClick={() => router.push(`/blog/${id}`)}
			className='md:h-auto md:space-y-5 md:max-w-[18rem] px-3 py-5 bg-white rounded-2xl flex flex-col justify-between flex-[0_0_70%] h-72 cursor-pointer'
		>
			<div className='space-y-4'>
				<Image
					src={imgSrc}
					alt={imgSrc}
					width={1920}
					height={1080}
				/>
				<div className='flex items-center space-x-1'>
					<div className='bg-yellow-500 rounded-full w-2 h-2'></div>
					<h3 className='text-yellow-500 text-sm'>
						{type}
					</h3>
				</div>
			</div>
			<h2 className='md:text-xl md:max-w-xs text-base font-bold'>
				{title}
			</h2>
			<h3 className='md:block hidden max-w-[15rem]'>
				{body}
			</h3>
			<h3 className='text-[#6E6E6E] text-sm'>
				{date}
			</h3>
		</div>
	);
};

export default BlogCard;
