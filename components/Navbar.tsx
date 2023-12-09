import Image from 'next/image';
import Links from './Links';

const Navbar = () => {
	return (
		<nav className='flex justify-between'>
			<Image src='' alt='logo' />
      <Links />
      <button className='button px-6 py-1'>Позвонить</button>
		</nav>
	);
};

export default Navbar;
