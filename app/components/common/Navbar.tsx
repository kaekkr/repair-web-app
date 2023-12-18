import Image from 'next/image';
import Links from './Links';
import HamburgerMenu from './HamburgerMenu';

async function getNavbarData(lang: string) {
	const res = await fetch(
		`http://mepebag547.temp.swtest.ru/api/V1/menus?lang=${lang}`
	);

	if (!res.ok) {
		throw new Error(
			'Failed to fetch navbar data'
		);
	}

	return res.json();
}

async function getLogo() {
	const res = await fetch(
		'http://mepebag547.temp.swtest.ru/api/V1/logo'
	);

	if (!res.ok) {
		throw new Error('Failed to fetch logo');
	}

	return res.json();
}

const Navbar = async ({
	lang,
}: {
	lang: string;
}) => {
	const { logo } = await getLogo();
	const navbarData = await getNavbarData(lang);

	return (
		<nav className='md:bg-[#F3F3F3] md:p-0 bg-white rounded-2xl py-5 px-6 mb-10 space-y-5'>
			<div className='flex justify-between items-center'>
				<Image
					src={logo}
					alt='logo'
					width={48}
					height={48}
				/>
				<h2 className='md:hidden text-xl'>
					8 702 222 41 41
				</h2>
				<Links links={navbarData.data} />
				<button className='button px-7 py-2 hidden md:block'>
					Позвонить
				</button>
			</div>
			<HamburgerMenu />
		</nav>
	);
};

export default Navbar;
