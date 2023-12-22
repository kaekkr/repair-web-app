'use client';

import { LinkT } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinksAlternate = ({
	links,
}: {
	links: LinkT[];
}) => {
	const pathname = usePathname();

	return (
		<ul className='text-center text-white font-bold space-y-5 text-2xl'>
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

export default LinksAlternate;
