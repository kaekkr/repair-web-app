import SendGmailButton from './SendGmailButton';

const KeepWithUs = () => {
	return (
		<div className='bg-yellow-500 rounded-xl text-white px-4 py-6 space-y-4'>
			<h1 className='font-bold'>Keep with us</h1>
			<h3 className='max-w-xs'>
				краткое описание темыкраткое описание
				темыкраткое опис
			</h3>
			<SendGmailButton />
			<p>
				Unsubscribe any time, no hard feelings.
			</p>
		</div>
	);
};

export default KeepWithUs;
