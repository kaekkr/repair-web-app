import ConsultationForm from './ConsultationForm';

const Consultation = () => {
	return (
		<div className='bg-white rounded-md max-w-xl py-2 px-5 space-y-5'>
			<h1 className='font-bold text-2xl'>
				Экспертный ремонт бытовой техники в Алмате
				на дому
			</h1>
			<h2>
				Закажите бесплатную консультацию за
				несколько минут. Позвоните по 87022224141
				или же напишите нам по ватсапу
			</h2>
			<ConsultationForm />
		</div>
	);
};

export default Consultation;
