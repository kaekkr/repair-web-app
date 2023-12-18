import Form from './Form';

interface FormCardProps {
	title: string;
	body: string;
	selectOptions: string[];
}

const FormCard = ({
	title,
	body,
	selectOptions,
}: FormCardProps) => {
	return (
		<div className='md:px-5 md:space-y-6 md:py-2 max-w-lg bg-white space-y-4'>
			<h1 className='font-bold max-w-md text-xl'>
				{title}
			</h1>
			<h3 className='text-sm'>
				{/* Закажите бесплатную консультацию за
				несколько минут. Позвоните по{' '}
				<span className='text-yellow-500'>
					87022224141
				</span>{' '}
				или же напишите нам по ватсапу */}
				{body}
			</h3>
			<Form selectOptions={selectOptions} />
		</div>
	);
};

export default FormCard;
