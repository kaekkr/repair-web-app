import Blogs from '@/components/blog/Blogs';
import HeroBlog from '@/components/blog/HeroBlog';

const BlogPage = () => {
	return (
		<main className='space-y-20'>
			<HeroBlog />
			<Blogs />
		</main>
	);
};

export default BlogPage;
