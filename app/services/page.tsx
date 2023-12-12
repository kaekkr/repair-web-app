import HeroAbout from '@/components/about/HeroAbout';
import FourCardsAlternate from '@/components/common/FourCardsAlternate';
import WorkOrServiceCard from '@/components/home/WorkOrServiceCard';
import { services } from '@/data';

const ServicesPage = () => {
	return (
		<main className='space-y-20'>
			<HeroAbout />
			<FourCardsAlternate title='Наши услуги'>
				{services.map(service => (
					<WorkOrServiceCard
						key={service.id}
            id={service.id}
						title={service.title}
						body={service.body}
					/>
				))}
			</FourCardsAlternate>
		</main>
	);
};

export default ServicesPage;
