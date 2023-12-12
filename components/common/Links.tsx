'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = () => {
	const pathname = usePathname();

	return (
		<ul className='hidden md:flex space-x-10'>
			<li>
				<Link
					href='/'
					className={
						pathname === '/' ? 'active-page' : ''
					}
				>
					Главная
				</Link>
			</li>
			<li>
				<Link
					href='/about'
					className={
						pathname === '/about'
							? 'active-page'
							: ''
					}
				>
					О нас
				</Link>
			</li>
			<li>
				<Link
					href='/services'
					className={
						pathname === '/services'
							? 'active-page'
							: ''
					}
				>
					Услуги
				</Link>
			</li>
			<li>
				<Link
					href='/reviews'
					className={
						pathname === '/reviews'
							? 'active-page'
							: ''
					}
				>
					Отзывы
				</Link>
			</li>
			<li>
				<Link
					href='/masters'
					className={
						pathname === '/masters'
							? 'active-page'
							: ''
					}
				>
					Мастера
				</Link>
			</li>
			<li>
				<Link
					href='/contacts'
					className={
						pathname === '/contacts'
							? 'active-page'
							: ''
					}
				>
					Контакты
				</Link>
			</li>
			<li>
				<Link
					href='/blog'
					className={
						pathname === '/blog'
							? 'active-page'
							: ''
					}
				>
					Блог
				</Link>
			</li>
		</ul>
	);
};

export default Links;
