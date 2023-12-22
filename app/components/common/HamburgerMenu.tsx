'use client';

import { useState } from 'react';
import LinksAlternate from './LinksAlternate';
import { LinkT } from '@/types';

const HamburgerMenu = ({
	links,
}: {
	links: LinkT[];
}) => {
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
				className={`animate-fade ${
					isHamburgerOpen ? 'appear' : 'disappear'
				} w-1/2 fixed inset-0 z-50 bg-yellow-500 flex items-center justify-center`}
			>
				<LinksAlternate links={links} />
			</div>
		</div>
	);
};

export default HamburgerMenu;
