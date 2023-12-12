import Image from 'next/image';
import Links from './Links';

const Navbar = () => {
	return (
		<nav className='md:bg-[#F3F3F3] md:p-0 flex justify-between items-center bg-white rounded-2xl py-5 px-6 mb-10'>
			<Image
				src='logo.svg'
				alt='logo'
				width={48}
				height={48}
			/>
			<h2 className='md:hidden'>
				8 702 222 41 41
			</h2>
			<Links />
			<button className='button px-7 py-2 hidden md:block'>
				Позвонить
			</button>
			<button className='md:hidden'>
				<Image
					src='icons/hamburger-icon.svg'
					alt='hamburger-icon'
					width={30}
					height={30}
				/>
			</button>
		</nav>
	);
};

export default Navbar;
