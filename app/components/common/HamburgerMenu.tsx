'use client';

import { useState } from 'react';
import LinksAlternate from './LinksAlternate';

const HamburgerMenu = () => {
	const [isHamburgerOpen, setHamburgerOpen] =
		useState(false);

	const toggleHamburgerMenu = () => {
		setHamburgerOpen(!isHamburgerOpen);
	};

	return (
		<div className='md:hidden'>
			<button
				onClick={toggleHamburgerMenu}
				className='flex flex-col justify-center'
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
			<div
				className={`${
					isHamburgerOpen && 'animate-fade-down'
				}`}
			>
				<LinksAlternate />
			</div>
		</div>
	);
};

export default HamburgerMenu;
