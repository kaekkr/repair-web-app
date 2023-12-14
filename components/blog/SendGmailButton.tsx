const SendGmailButton = () => {
	return (
		<div className='relative'>
			<input
				type='text'
				placeholder='Gmail'
				className='w-full md:text-base text-xs bg-[#F7F7F7] border-0 rounded-md p-2 indent-9 bg-[15px] bg-no-repeat bg-[url("/icons/gmail-icon.svg")] bg-[length:20px_20px] focus:outline-none focus:outline-yellow-500'
			/>
			<button className='bg-[#2B303A] rounded-md absolute px-4 py-1 right-0'>
				Отправить{' '}
			</button>
		</div>
	);
};

export default SendGmailButton;
