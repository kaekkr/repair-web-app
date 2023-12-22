import { getDictionary } from '@/app/[lang]/dictionaries';
import Image from 'next/image';

const Footer = async ({
	lang,
}: {
	lang: string;
}) => {
	const { contactTitle, footerTitle } =
		await getDictionary(lang);
	return (
		<footer className='md:space-y-10 space-y-5 mt-10 relative'>
			<h1 className='md:text-center font-bold'>
				{contactTitle}
			</h1>
			<Image
				src='/bg/footer-bg.svg'
				alt='footer bg'
				width={1920}
				height={1080}
				className='md:block rounded-[2rem] hidden'
			/>
			<div className='md:px-6 md:py-12 md:top-1/4 md:right-[65%] md:absolute max-w-xl h-[18rem]'>
				<div className='md:space-y-20 space-y-4'>
					<h1 className='md:text-3xl font-bold'>
						{footerTitle}
					</h1>
					<div className='space-y-5'>
						<div className='flex space-x-5'>
							<Image
								src='/icons/phone-icon.svg'
								alt='phone icon'
								width={40}
								height={40}
							/>
							<div className='space-y-5'>
								<h1 className='font-bold'>
									+ 7 702 222 4141
								</h1>
								<h1 className='font-bold'>
									+ 7 702 222 4141
								</h1>
							</div>
						</div>
						<div className='flex space-x-5'>
							<Image
								src='/icons/mail-icon.svg'
								alt='mail icon'
								width={40}
								height={40}
							/>
							<h1 className='font-bold'>
								master@gmail.com
							</h1>
						</div>
					</div>
				</div>
			</div>
			<Image
				src='/bg/footer-2-bg.svg'
				alt='footer bg'
				width={1920}
				height={1080}
				className='md:hidden rounded-[2rem]'
			/>
		</footer>
	);
};

export default Footer;
