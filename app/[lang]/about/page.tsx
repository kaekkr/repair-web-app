import FactCard from '@/app/components/about/FactCard';
import HeroAbout from '@/app/components/about/HeroAbout';
import Carousel from '@/app/components/common/Carousel';
import FourCard from '@/app/components/common/FourCard';
import FourCards from '@/app/components/common/FourCards';
import { AboutPageData } from '@/types';
import {
	Metadata,
} from 'next';
import Image from 'next/image';
import { getDictionary } from '../dictionaries';

async function getAboutPageData(
	lang: string
): Promise<AboutPageData> {
	const res = await fetch(
		`${process.env.API_ROUTE}/page/about?lang=${lang}`
	);

	if (!res.ok) {
		throw new Error(
			'Failed to fetch about page data'
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

	const {
		heroTitle,
		heroDescription,
		aboutPage,
	} = await getDictionary(lang);

	return (
		<main className='md:space-y-20 space-y-14'>
			<HeroAbout
				imgSrc={banner.image}
				title={heroTitle}
				description={heroDescription}
			/>
			<FourCards title={aboutPage.aboutTitle}>
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
				title={aboutPage.certificateTitle}
				body={aboutPage.certificateDescription}
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
				title={aboutPage.factTitle}
				body={aboutPage.factDescription}
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
