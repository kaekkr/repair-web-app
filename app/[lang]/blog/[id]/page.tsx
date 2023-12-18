import KeepWithUs from '@/app/components/blog/KeepWithUs';
import SimilarArticles from '@/app/components/blog/SimilarArticles';
import Carousel from '@/app/components/common/Carousel';
import FeedbackCard from '@/app/components/home/FeedbackCard';
import {
	feedbacks,
	washingMachinesBlogs,
} from '@/data';
import Image from 'next/image';

const AriclePage = ({
	params: { id, lang },
}: {
	params: { id: string; lang: string };
}) => {
	const washingMachinesBlog =
		washingMachinesBlogs.find(
			washingMachinesBlog => {
				return (
					washingMachinesBlog.id ===
					parseInt(id)
				);
			}
		)!;

	if (!washingMachinesBlog) return <>error</>;

	return (
		<main className='space-y-10'>
			<div className='md:flex md:items-center space-y-2'>
				<div className='flex items-center space-x-1'>
					<h2>{washingMachinesBlog.type}</h2>
					<Image
						src='/icons/arrow-right-icon.svg'
						alt='arrow right icon'
						width={10}
						height={10}
					/>
				</div>
				<h2>{washingMachinesBlog.title}</h2>
			</div>
			<div className='space-y-3'>
				<h1 className='font-bold'>
					{washingMachinesBlog.title}
				</h1>
				<h2 className='text-[#6E6E6E]'>
					{washingMachinesBlog.date}
				</h2>
			</div>
			<Image
				src={washingMachinesBlog.imgSrc}
				alt={washingMachinesBlog.imgSrc}
				width={1920}
				height={1080}
				className='rounded-2xl'
			/>
			<div className='space-y-2'>
				<h2 className='font-bold text-xl'>
					{washingMachinesBlog.title}
				</h2>
				<h3>{washingMachinesBlog.body}</h3>
			</div>
			<div className='space-y-7'>
				<h1 className='font-bold'>Комментарии</h1>
				<Carousel type=''>
					{feedbacks.map(feedback => (
						<FeedbackCard
							key={feedback.id}
							title={feedback.title}
							body={feedback.body}
							name={feedback.name}
							date={feedback.date}
						/>
					))}
				</Carousel>
			</div>
			<SimilarArticles />
			<KeepWithUs />
		</main>
	);
};

export default AriclePage;
