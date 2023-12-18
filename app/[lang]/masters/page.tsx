import Carousel from '@/app/components/common/Carousel';
import FormCard from '@/app/components/common/FormCard';
import Hero from '@/app/components/common/Hero';
import MasterCard from '@/app/components/home/MasterCard';
import { masters } from '@/data';

const MastersPage = ({
	params: { lang },
}: {
	params: { lang: string };
}) => {
	return (
		<main className='space-y-20'>
			<Hero imgSrc='/bg/hero-masters-bg.svg'>
				<FormCard
					title='Присоединяйтесь к Нам: Мастера бытового ремонта'
					body='Добро пожаловать в наше сообщество мастеров, где профессионализм встречается с возможностью роста! Если вы являетесь опытным специалистом в области бытового ремонта и стремитесь к новым вызовам, то мы хотим видеть вас в нашей команде. Заполните эту форму заявки, мы с вами свяжемся в течении недели.'
					selectOptions={[
						'Позиция',
						'1',
						'2',
						'3',
					]}
				/>
			</Hero>
			<Carousel
				title='Наши мастера'
				type=''
				style={{ marginTop: '30rem' }}
			>
				{masters.map(master => (
					<MasterCard
						key={master.id}
						body={master.body}
						name={master.name}
						location={master.location}
						experience={master.experience}
						imgSrc={master.imgSrc}
					/>
				))}
			</Carousel>
		</main>
	);
};

export default MastersPage;
