import Carousel from '@/app/components/common/Carousel';
import FormCard from '@/app/components/common/FormCard';
import Hero from '@/app/components/common/Hero';
import MasterCard from '@/app/components/common/MasterCard';
import { MastersPageData } from '@/types';
import {
	Metadata,
	ResolvingMetadata,
} from 'next';
import { getDictionary } from '../dictionaries';

async function getMastersPageData(
	lang: string
): Promise<MastersPageData> {
	const res = await fetch(
		`http://mepebag547.temp.swtest.ru/api/V1/page/master?lang=${lang}`
	);

	if (!res.ok) {
		throw new Error(
			'Failed to fetch masters page data'
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
	} = await getMastersPageData(lang);

	const title = metaTitle;
	const description = metaDescription;
	const keywords = metaKeywords;

	return {
		title,
		description,
		keywords,
	};
}

const MastersPage = async ({
	params: { lang },
}: {
	params: { lang: string };
}) => {
	const { banner, masters } =
		await getMastersPageData(lang);

	const { buttons, inputs, mastersPage, mastersTitle } = await getDictionary(
		lang
	);

	return (
		<main className='space-y-20'>
			{/* <Hero imgSrc={banner.image}>
				<FormCard
					title={mastersPage.form.title}
					body={mastersPage.form.description}
					selectOptions={mastersPage.selectOptions}
					buttonTitle={buttons.buttonTitle1}
					inputsText={inputs}
				/>
			</Hero> */}
			<Hero imgSrc="/bg/hero-masters-bg.svg">
				<FormCard 
					title={mastersPage.form.title}
					body={mastersPage.form.description}
					selectOptions={mastersPage.selectOptions}
					buttonTitle={buttons.buttonTitle1}
					inputsText={inputs}
				/>
			</Hero>
			<Carousel
				title={mastersTitle}
				type=''
				style={{ marginTop: '30rem' }}
			>
				{masters.map(master => (
					<MasterCard
						key={master.id}
						tags={master.tags}
						name={master.name}
						location={master.distance}
						experience={master.experience}
						imgSrc={master.image}
					/>
				))}
			</Carousel>
		</main>
	);
};

export default MastersPage;
