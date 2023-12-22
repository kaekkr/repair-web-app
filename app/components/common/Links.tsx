'use client';

import { LinkT } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = ({ links }: { links: LinkT[] }) => {
	const pathname = usePathname();

	return (
		<ul className='md:flex hidden space-x-10'>
			{links.map(link => (
				<li key={link.id}>
					<Link
						href={link.slug}
						className={
							pathname === link.slug
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
