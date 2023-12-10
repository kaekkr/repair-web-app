import Image from 'next/image';
import Links from './Links';

const Navbar = () => {
	return (
		<nav className='flex justify-between items-center'>
			<Image
				src='logo.svg'
				alt='logo'
				width={48}
				height={48}
			/>
			<Links />
			<button className='button px-7 py-2'>
				Позвонить
			</button>
		</nav>
	);
};

export default Navbar;
