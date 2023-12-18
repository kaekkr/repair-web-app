import { Inter } from 'next/font/google';

import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
	params: { lang },
}: {
	children: React.ReactNode;
	params: { lang: string };
}) {
	return (
		<html lang={lang}>
			<body
				className={`${inter.className} p-5 bg-[#F3F3F3]`}
			>
				<Navbar lang={lang} />
				{children}
				<Footer lang={lang} />
			</body>
		</html>
	);
}
