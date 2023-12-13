'use client';

import Image from 'next/image';
import Links from './Links';
import { useState } from 'react';
import LinksAlternate from './LinksAlternate';
import HamburgerMenu from './HamburgerMenu';

const Navbar = () => {
	const [hamburgerMenu, setHamburgerMenu] =
		useState(false);

	const toggleHamburgerMenu = () => {
		setHamburgerMenu(prevState => !prevState);
	};

	return (
		<nav className='md:bg-[#F3F3F3] md:p-0 flex justify-between items-center bg-white rounded-2xl py-5 px-6 mb-10'>
			<Image
				src='logo.svg'
				alt='logo'
				width={48}
				height={48}
			/>
			<h2 className='md:hidden text-xl'>
				8 702 222 41 41
			</h2>
			<Links />
			<button className='button px-7 py-2 hidden md:block'>
				Позвонить
			</button>
			{/* <HamburgerMenu /> */}
		</nav>
	);
};

export default Navbar;
