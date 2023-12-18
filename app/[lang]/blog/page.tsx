import Blogs from '@/app/components/blog/Blogs';
import HeroBlog from '@/app/components/blog/HeroBlog';

const BlogPage = ({
	params: { lang },
}: {
	params: { lang: string };
}) => {
	return (
		<main className='space-y-20'>
			<HeroBlog />
			<Blogs />
		</main>
	);
};

export default BlogPage;
