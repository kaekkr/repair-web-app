'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinksAlternate = () => {
	const pathname = usePathname();

	return (
		<ul className='text-center text-white font-bold space-y-5 text-2xl'>
			<li className=''>
				<Link
					href='/'
					className={
						pathname === '/' ? 'active-page' : ''
					}
				>
					Главная
				</Link>
			</li>
			<li className=''>
				<Link
					href='/about'
					className={
						pathname === '/about'
							? 'active-page '
							: ''
					}
				>
					О нас
				</Link>
			</li>
			<li className=''>
				<Link
					href='/services'
					className={
						pathname === '/services'
							? 'active-page '
							: ''
					}
				>
					Услуги
				</Link>
			</li>
			<li className=''>
				<Link
					href='/reviews'
					className={
						pathname === '/reviews'
							? 'active-page '
							: ''
					}
				>
					Отзывы
				</Link>
			</li>
			<li className=''>
				<Link
					href='/masters'
					className={
						pathname === '/masters'
							? 'active-page '
							: ''
					}
				>
					Мастера
				</Link>
			</li>
			<li className=''>
				<Link
					href='/contacts'
					className={
						pathname === '/contacts'
							? 'active-page '
							: ''
					}
				>
					Контакты
				</Link>
			</li>
			<li className=''>
				<Link
					href='/blog'
					className={
						pathname === '/blog'
							? 'active-page '
							: ''
					}
				>
					Блог
				</Link>
			</li>
		</ul>
	);
};

export default LinksAlternate;
