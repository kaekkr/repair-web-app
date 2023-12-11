'use client';

const ConsultationForm = () => {
	return (
		<form className='grid grid-cols-2 grid-rows-3 gap-5'>
			<select
				name=''
				id=''
				className='md:py-3 md:px-4 md:text-base text-xs px-2 rounded-lg bg-white border-yellow-500 border-2 cursor-pointer'
			>
				<option value='' disabled selected>
					Выберите технику
				</option>
				<option value=''>1</option>
			</select>
			<input
				type='text'
				placeholder='Сотовый номер'
				className='md:text-base text-xs bg-[#F7F7F7] border-0 rounded-lg py-1 px-2 indent-10 bg-[15px] bg-no-repeat bg-[url("/icons/phone-icon.svg")] bg-[length:20px_20px] focus:outline-none focus:outline-yellow-500'
			/>
			<input
				type='text'
				placeholder='Полное имя'
				className='md:text-base text-xs bg-[#F7F7F7] border-0 rounded-lg col-span-2 py-1 px-2 indent-10 bg-[15px] bg-no-repeat bg-[url("/icons/people-icon.svg")] bg-[length:20px_20px] focus:outline-none focus:outline-yellow-500'
			/>
			<button className='button col-span-2 py-2 md:py-0'>
				Отправить
			</button>
		</form>
	);
};

export default ConsultationForm;
