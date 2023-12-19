import FactCard from '@/app/components/about/FactCard';
import HeroAbout from '@/app/components/about/HeroAbout';
import Carousel from '@/app/components/common/Carousel';
import FourCard from '@/app/components/common/FourCard';
import FourCards from '@/app/components/common/FourCards';
import { AboutPageData } from '@/types';
import {
	Metadata,
	ResolvingMetadata,
} from 'next';
import Image from 'next/image';

async function getAboutPageData(
	lang: string
): Promise<AboutPageData> {
	const res = await fetch(
		`http://mepebag547.temp.swtest.ru/api/V1/page/about?lang=${lang}`
	);

	if (!res.ok) {
		throw new Error(
			'Failed to fetch about page data'
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
	} = await getAboutPageData(lang);

	const title = metaTitle;
	const description = metaDescription;
	const keywords = metaKeywords;

	return {
		title,
		description,
		keywords,
	};
}

const AboutPage = async ({
	params: { lang },
}: {
	params: { lang: string };
}) => {
	const {
		banner,
		about: aboutS,
		certificates,
		facts,
	} = await getAboutPageData(lang);

	return (
		<main className='md:space-y-20 space-y-14'>
			<HeroAbout />
			<FourCards title='Больше про нашу компанию'>
				{aboutS.map((about, i) => (
					<FourCard
						key={about.id}
						title={about.title}
						body={about.description}
						imgSrc={about.image}
						type={i}
					/>
				))}
			</FourCards>
			<Carousel
				title='Сертификации и Лицензии'
				body='Наша компания обладает всеми необходимыми сертификациями и лицензиями, гарантируя, что вы сотрудничаете с надежным и профессиональным сервисным центром.'
				type=''
			>
				{certificates.map(certificate => (
					<div
						className='md:flex-[0_0_30%] md:h-auto h-48 relative flex-[0_0_70%]'
						key={certificate.id}
					>
						<Image
							src={certificate.image}
							alt={certificate.alt}
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
				{facts.map(fact => (
					<FactCard
						key={fact.id}
						// title={interestingFact.title}
						title='Test'
						// body={interestingFact.description}
						body='Test'
						imgSrc={fact.image}
						alt={fact.alt}
					/>
				))}
			</FourCards>
		</main>
	);
};

export default AboutPage;
