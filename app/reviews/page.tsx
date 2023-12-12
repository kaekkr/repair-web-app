import Carousel from '@/components/common/Carousel';
import FeedbackCard from '@/components/home/FeedbackCard';
import { feedbacks } from '@/data';

const ReviewsPage = () => {
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
			</Carousel>
		</main>
	);
};

export default ReviewsPage;
