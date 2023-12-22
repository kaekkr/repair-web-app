'use client';

import { handleFormSubmit } from '../../api/handleFormSubmit';

type FormProps = {
	selectOptions: string[];
	buttonTitle: string;
	inputs: {
		inputTitle1: string;
		inputTitle2: string;
	};
};

const Form = ({
	selectOptions,
	buttonTitle,
	inputs,
}: FormProps) => {
	return (
		<form
			action={handleFormSubmit}
			className='md:gap-5 grid grid-cols-2 grid-rows-3 gap-2'
		>
			<select
				name=''
				id=''
				className='md:py-3 md:px-4 md:text-base text-xs px-2 rounded-lg bg-white border-yellow-500 border-2 cursor-pointer'
				defaultValue='defaultValue'
			>
				{selectOptions.map((selectOption, i) => {
					if (i === 0)
						return (
							<option
								key={i}
								value='defaultValue'
								disabled
							>
								{selectOption}
							</option>
						);

					return (
						<option key={i}>
							{selectOption}
						</option>
					);
				})}
			</select>
			<input
				name='phone'
				type='text'
				placeholder={inputs.inputTitle1}
				className='md:indent-10 indent-7 bg-[15px] bg-no-repeat bg-[url("/icons/phone-icon.svg")] bg-[length:20px_20px]'
			/>
			<input
				name='name'
				type='text'
				placeholder={inputs.inputTitle2}
				className='rounded-lg col-span-2 indent-10 bg-[15px] bg-no-repeat bg-[url("/icons/people-icon.svg")] bg-[length:20px_20px]'
			/>
			<button
				className='button col-span-2 py-2 md:py-0'
				type='submit'
			>
				{buttonTitle}
			</button>
		</form>
	);
};

export default Form;
