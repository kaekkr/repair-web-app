import KeepWithUs from '@/app/components/blog/KeepWithUs';
import ShareWithFriends from '@/app/components/blog/ShareWithFriends';
import SimilarArticles from '@/app/components/blog/SimilarArticles';
import Carousel from '@/app/components/common/Carousel';
import FeedbackCard from '@/app/components/common/ReviewCard';
import { ArticlePageData } from '@/types';
import { Metadata } from 'next';
import Image from 'next/image';

async function getArticlePageData(
	id: number,
	lang: string
): Promise<ArticlePageData> {
	const res = await fetch(
		`http://mepebag547.temp.swtest.ru/api/V1/page/blog/${id}?lang=${lang}`
	);

	if (!res.ok) {
		throw new Error(
			'Failed to fetch main page data'
		);
	}

	return res.json();
}

export async function generateMetadata({
	params: { id, lang },
}: {
	params: { id: number; lang: string };
}): Promise<Metadata> {
	const {
		meta_title: metaTitle,
		meta_description: metaDescription,
		meta_keywords: metaKeywords,
	} = await getArticlePageData(id, lang);

	const title = metaTitle;
	const description = metaDescription;
	const keywords = metaKeywords;

	return {
		title,
		description,
		keywords,
	};
}

const AriclePage = async ({
	params: { id, lang },
}: {
	params: { id: string; lang: string };
}) => {
	const {
		tag,
		title,
		date,
		image,
		description,
		reviews,
		similar
	} = await getArticlePageData(
		parseInt(id),
		lang
	);

	return (
		<main className='space-y-10'>
			<div className='md:flex md:items-center space-x-2'>
				<div className='flex items-center space-x-2'>
					<h2>{tag}</h2>
					<Image
						src='/icons/arrow-right-icon.svg'
						alt='arrow right icon'
						width={10}
						height={10}
					/>
				</div>
				<h2>{title}</h2>
			</div>
			<div className='flex'>
				<div>
					<div className='space-y-3'>
						<h1 className='font-bold'>{title}</h1>
						<h2 className='text-[#6E6E6E]'>
							{date}
						</h2>
					</div>
					<Image
						src={image}
						alt={image}
						width={1200}
						height={700}
						className='rounded-2xl hidden md:block'
					/>
					<Image
						src={image}
						alt={image}
						width={400}
						height={300}
						className='rounded-2xl md:hidden'
					/>
					<div className='space-y-2'>
						<h2 className='font-bold text-xl'>
							{title}
						</h2>
						<h3>{description}</h3>
					</div>
				</div>
				<div className='md:block space-y-5 hidden'>
					<SimilarArticles similar={similar}/>
					<ShareWithFriends />
				</div>
			</div>
			<div className='space-y-7'>
				<h1 className='font-bold'>Комментарии</h1>
				<Carousel type=''>
					{reviews.map(review => (
					<FeedbackCard
						key={review.id}
						title='Test'
						body={review.description}
						name={review.name}
						date={review.date}
					/>
				))}
				</Carousel>
			</div>
			{typeof window !== 'undefined' &&
				window.innerWidth < 768 && (
					<SimilarArticles similar={similar}/>
				)}
			{typeof window !== 'undefined' &&
				window.innerWidth < 768 && <KeepWithUs />}
		</main>
	);
};

export default AriclePage;
