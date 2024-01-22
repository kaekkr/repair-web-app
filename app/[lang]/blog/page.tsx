import Blogs from '@/app/components/blog/Blogs';
import HeroBlog from '@/app/components/blog/HeroBlog';
import { getDictionary } from '../dictionaries';
import { BlogsPageData } from '@/types';
import { Metadata } from 'next';

async function getBlogsPageData(
	lang: string
): Promise<BlogsPageData> {
	const res = await fetch(
		`http://remont.its.bz/api/V1/page/blog?lang=${lang}&tag=1`
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
	} = await getBlogsPageData(lang);

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
	const { banner, blogs } = await getBlogsPageData(lang);

	const { blogPage } = await getDictionary(lang);

	return (
		<main className='space-y-20'>
			<HeroBlog
				imgSrc={banner.image}
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
