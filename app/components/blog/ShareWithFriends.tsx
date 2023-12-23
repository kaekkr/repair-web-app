import Image from 'next/image';

const ShareWithFriends = () => {
	return (
		<div className='bg-[#2B303A] rounded-xl py-3 px-2 space-y-5'>
			<h1 className='text-white font-bold'>Поделиться с другими </h1>
			<div className='space-x-3'>
				<button className='bg-white rounded-lg p-2'>
					<Image
						src='/icons/instagram-icon.svg'
						alt='instagram icon'
						width={30}
						height={30}
					/>
				</button>
				<button className='bg-white rounded-lg p-2'>
					<Image
						src='/icons/whatsapp-icon.svg'
						alt='whatsapp icon'
						width={30}
						height={30}
					/>
				</button>
				<button className='bg-white rounded-lg p-2'>
					<Image
						src='/icons/telegram-icon.svg'
						alt='telegram icon'
						width={30}
						height={30}
					/>
				</button>
			</div>
		</div>
	);
};

export default ShareWithFriends;
