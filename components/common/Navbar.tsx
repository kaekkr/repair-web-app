'use client';

import Image from 'next/image';
import Links from './Links';
import { useState } from 'react';
import LinksAlternate from './LinksAlternate';

const Navbar = () => {
	const [isHamburgerOpen, setHamburgerOpen] =
		useState(false);

	const toggleHamburgerMenu = () => {
		setHamburgerOpen(!isHamburgerOpen);
	};

	return (
		<nav className='md:bg-[#F3F3F3] md:p-0 bg-white rounded-2xl py-5 px-6 mb-10 space-y-5'>
			<div className='flex justify-between items-center'>
				<Image
					src='/logo.svg'
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
				<button
					onClick={toggleHamburgerMenu}
					className='md:hidden flex flex-col justify-center'
				>
					<span
						className={`bg-black block transition-all duration-300 ease-out 
														h-0.5 w-6 rounded-sm ${
															isHamburgerOpen
																? 'rotate-45 translate-y-1'
																: '-translate-y-0.5'
														}`}
					></span>
					<span
						className={`bg-black block transition-all duration-300 ease-out 
														h-0.5 w-4 rounded-sm my-0.5 ${
															isHamburgerOpen
																? 'opacity-0'
																: 'opacity-100'
														}`}
					></span>
					<span
						className={`bg-black block transition-all duration-300 ease-out 
														h-0.5 w-6 rounded-sm ${
															isHamburgerOpen
																? '-rotate-45 -translate-y-1'
																: 'translate-y-0.5'
														}`}
					></span>
				</button>
			</div>
			{isHamburgerOpen && (
				<div
					className={`${
						isHamburgerOpen && 'animate-fade-down'
					}`}
				>
					<LinksAlternate />
				</div>
			)}
		</nav>
	);
};

export default Navbar;
