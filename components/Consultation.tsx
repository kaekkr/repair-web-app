import ConsultationForm from './ConsultationForm';

const Consultation = () => {
	return (
		<div className='bg-white max-w-md py-2 px-5 space-y-6'>
			<h1 className='font-bold'>
				Экспертный ремонт бытовой техники в Алмате
				на дому
			</h1>
			<h3>
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
