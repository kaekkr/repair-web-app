import HeroAbout from '@/components/about/HeroAbout';
import InterestingFactsCard from '@/components/about/InterestingFactsCard';
import Carousel from '@/components/common/Carousel';
import FourCard from '@/components/common/FourCard';
import FourCards from '@/components/common/FourCards';
import {
	certificates,
	interestingFacts,
	moreAboutCompany,
} from '@/data';
import Image from 'next/image';

const AboutPage = () => {
	return (
		<main className='space-y-20'>
			<HeroAbout />
			<FourCards title='Больше про нашу компанию'>
				{moreAboutCompany.map(
					moreAboutCompany => (
						<FourCard
							key={moreAboutCompany.id}
							title={moreAboutCompany.title}
							body={moreAboutCompany.body}
							imgSrc={moreAboutCompany.imgSrc}
							type={moreAboutCompany.type}
						/>
					)
				)}
			</FourCards>
			<Carousel
				title='Сертификации и Лицензии'
				body='Наша компания обладает всеми необходимыми сертификациями и лицензиями, гарантируя, что вы сотрудничаете с надежным и профессиональным сервисным центром.'
				type=''
			>
				{certificates.map(certificate => (
					<div
						className='relative h-64 flex-[0_0_20%]'
						key={certificate.id}
					>
						<Image
							src={certificate.imgSrc}
							alt={certificate.imgSrc}
							width={400}
							height={400}
						/>
					</div>
				))}
			</Carousel>
			<FourCards
				title='Интересные факты'
				body='Работаем с 2022 года'
			>
				{interestingFacts.map(interestingFact => (
					<InterestingFactsCard
						key={interestingFact.id}
						title={interestingFact.title}
						body={interestingFact.body}
						imgSrc={interestingFact.imgSrc}
					/>
				))}
			</FourCards>
		</main>
	);
};

export default AboutPage;
