import { useState } from 'react';
import LinksAlternate from './LinksAlternate';

const HamburgerMenu = () => {
	const [isHamburgerOpen, setHamburgerOpen] =
		useState(false);

	const toggleHamburgerMenu = () => {
		setHamburgerOpen(!isHamburgerOpen);
	};

	return (
		<div className='relative'>
			<input
				type='checkbox'
				id='hamburger-toggle'
				className='hidden hamburger-checkbox'
				checked={isHamburgerOpen}
				onChange={toggleHamburgerMenu}
			/>
			<label
				htmlFor='hamburger-toggle'
				className='hamburger-button'
			>
				<span className='hamburger-icon'>&nbsp;</span>
			</label>

			<div className='hamburger-background'>&nbsp;</div>

			<div
				className={`hamburger-nav absolute top-0 right-0 h-screen z-50 ${
					isHamburgerOpen
						? 'opacity-1 w-full'
						: 'opacity-0 w-0'
				} transition-all duration-800`}
			>
				<LinksAlternate />
			</div>
		</div>
	);
};

export default HamburgerMenu;
