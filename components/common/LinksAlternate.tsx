'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LinksAlternate = () => {
	const pathname = usePathname();

	return (
		<ul className='hamburger-list'>
			<li className='hamburger-item'>
				<Link
					href='/'
					className={
						pathname === '/'
							? 'active-page hamburger-link'
							: 'hamburger-link'
					}
				>
					Главная
				</Link>
			</li>
			<li className='hamburger-item'>
				<Link
					href='/about'
					className={
						pathname === '/about'
							? 'active-page hamburger-link'
							: 'hamburger-link'
					}
				>
					О нас
				</Link>
			</li>
			<li className='hamburger-item'>
				<Link
					href='/services'
					className={
						pathname === '/services'
							? 'active-page hamburger-link'
							: 'hamburger-link'
					}
				>
					Услуги
				</Link>
			</li>
			<li className='hamburger-item'>
				<Link
					href='/reviews'
					className={
						pathname === '/reviews'
							? 'active-page hamburger-link'
							: 'hamburger-link'
					}
				>
					Отзывы
				</Link>
			</li>
			<li className='hamburger-item'>
				<Link
					href='/masters'
					className={
						pathname === '/masters'
							? 'active-page hamburger-link'
							: 'hamburger-link'
					}
				>
					Мастера
				</Link>
			</li>
			<li className='hamburger-item'>
				<Link
					href='/contacts'
					className={
						pathname === '/contacts'
							? 'active-page hamburger-link'
							: 'hamburger-link'
					}
				>
					Контакты
				</Link>
			</li>
			<li className='hamburger-item'>
				<Link
					href='/blog'
					className={
						pathname === '/blog'
							? 'active-page hamburger-link'
							: 'hamburger-link'
					}
				>
					Блог
				</Link>
			</li>
		</ul>
	);
};

export default LinksAlternate;
