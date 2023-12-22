import Form from './Form';

type FormCardProps = {
	title: string;
	body: string;
	selectOptions: {
		selectOptionTitle1: string;
		selectOptionTitle2: string;
		selectOptionTitle3: string;
	};
	buttonTitle: string;
	inputs: {
		inputTitle1: string;
		inputTitle2: string;
	};
};

const FormCard = ({
	title,
	body,
	selectOptions,
	buttonTitle,
	inputs,
}: FormCardProps) => {
	return (
		<div className='md:px-5 md:space-y-6 md:py-2 max-w-lg bg-white space-y-4'>
			<h1 className='font-bold max-w-md text-xl'>
				{title}
			</h1>
			<h3 className='text-sm'>{body}</h3>
			<Form
				selectOptions={[
					`${selectOptions.selectOptionTitle1}`,
					`${selectOptions.selectOptionTitle2}`,
					`${selectOptions.selectOptionTitle3}`,
				]}
				buttonTitle={buttonTitle}
				inputs={inputs}
			/>
		</div>
	);
};

export default FormCard;
