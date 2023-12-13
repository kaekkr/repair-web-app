import ConsultationForm from './ConsultationForm';

const Consultation = () => {
	return (
		<div className='md:px-5 md:space-y-6 md:py-2 max-w-lg bg-white space-y-4'>
			<h1 className='font-bold max-w-md'>
				Экспертный ремонт бытовой техники в Алмате
				на дому
			</h1>
			<h3 className=''>
				Закажите бесплатную консультацию за
				несколько минут. Позвоните по{' '}
				<span className='text-yellow-500'>
					87022224141 
				</span>
				{' '}или же напишите нам по ватсапу
			</h3>
			<ConsultationForm />
		</div>
	);
};

export default Consultation;
