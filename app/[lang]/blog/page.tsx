import Blogs from '@/app/components/blog/Blogs';
import HeroBlog from '@/app/components/blog/HeroBlog';
import { getDictionary } from '../dictionaries';
import { BlogPageData } from '@/types';
import { Metadata } from 'next';

async function getBlogPageData(
	lang: string
): Promise<BlogPageData> {
	const res = await fetch(
		`http://mepebag547.temp.swtest.ru/api/V1/page/blog?lang=${lang}&tag=1`
	);

	if (!res.ok) {
		throw new Error(
			'Failed to fetch main page data'
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
	} = await getBlogPageData(lang);

	const title = metaTitle;
	const description = metaDescription;
	const keywords = metaKeywords;

	return {
		title,
		description,
		keywords,
	};
}

const BlogPage = async ({
	params: { lang },
}: {
	params: { lang: string };
}) => {
	const { banner, blogs } = await getBlogPageData(lang);

	const { blogPage } = await getDictionary(lang);

	return (
		<main className='space-y-20'>
			{/* <HeroBlog
				imgSrc={banner.image}
				title={blogPage.heroTitle}
			/> */}
			<HeroBlog
				imgSrc='/bg/hero-blog-bg.svg'
				title={blogPage.heroTitle}
			/>
			<Blogs
				buttons={blogPage.buttons}
				title={blogPage.blogsTitle}
				blogs={blogs}
			/>
		</main>
	);
};

export default BlogPage;
