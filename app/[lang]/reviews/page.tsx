import Carousel from '@/app/components/common/Carousel';
import FeedbackCard from '@/app/components/common/ReviewCard';
import { ReviewsPageData } from '@/types';
import { Metadata } from 'next';
import { getDictionary } from '../dictionaries';

async function getReviewsPageData(
	lang: string
): Promise<ReviewsPageData> {
	const res = await fetch(
		`${process.env.API_ROUTE}/page/review?lang=${lang}`
	);

	if (!res.ok) {
		throw new Error(
			'Failed to fetch reviews page data'
		);
	}

	return res.json();
}

export async function generateMetadata({
	params: { lang },
}: {
	params: { lang: string };
}): Promise<Metadata> {
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

const ReviewsPage = async ({
	params: { lang },
}: {
	params: { lang: string };
}) => {
	const { reviews } = await getReviewsPageData(
		lang
	);

	const { reviewTitle } = await getDictionary(
		lang
	);

	return (
		<main>
			<Carousel
				title={reviewTitle}
				type=''
			>
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
		</main>
	);
};

export default ReviewsPage;
