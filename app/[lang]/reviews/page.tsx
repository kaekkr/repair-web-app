import Carousel from '@/app/components/common/Carousel';
import FeedbackCard from '@/app/components/common/FeedbackCard';
import { feedbacks } from '@/data';
import {
	Metadata,
	ResolvingMetadata,
} from 'next';

async function getReviewsPageData(lang: string) {
	const res = await fetch(
		`http://mepebag547.temp.swtest.ru/api/V1/page/review?lang=${lang}`
	);

	if (!res.ok) {
		throw new Error(
			'Failed to fetch reviews page data'
		);
	}

	return res.json();
}

export async function generateMetadata(
	{
		params: { lang },
	}: { params: { lang: string } },
	parent: ResolvingMetadata
): Promise<Metadata> {
	const {
		meta_title: metaTitle,
		meta_description: metaDescription,
		meta_keywords: metaKeywords,
	} = await getReviewsPageData(lang);

	const title = metaTitle;
	const description = metaDescription;
	const keywords = metaKeywords;

	return {
		title,
		description,
		keywords,
	};
}

const ReviewsPage = ({
	params: { lang },
}: {
	params: { lang: string };
}) => {
	// const { reviews } = getReviewsPageData(lang);

	return (
		<main>
			<Carousel
				title='Что думают наши клиенты?'
				type=''
			>
				{feedbacks.map(feedback => (
					<FeedbackCard
						key={feedback.id}
						title={feedback.title}
						body={feedback.body}
						name={feedback.name}
						date={feedback.date}
					/>
				))}
				{/* {reviews.map(review => (
					<FeedbackCard
						key={review.id}
						title={review.title}
						body={review.body}
						name={review.name}
						date={review.date}
					/>
				))} */}
			</Carousel>
		</main>
	);
};

export default ReviewsPage;
