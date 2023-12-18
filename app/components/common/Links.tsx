'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Link {
	id: number;
	title: string;
	slug: string;
}

const Links = ({ links }: { links: Link[] }) => {
	const pathname = usePathname();

	return (
		<ul className='hidden md:flex space-x-10'>
			{links.map(link => (
				<li key={link.id}>
					<Link
						href='/'
						className={
							pathname === '/'
								? 'active-page'
								: ''
						}
					>
						{link.title}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Links;
