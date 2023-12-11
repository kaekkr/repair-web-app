import {
	Advantage,
	Brand,
	Feedback,
	Master,
	Work,
} from '@/types';

export const advantages: Advantage[] = [
	{
		id: 1,
		title: 'Бесплатное диагностика',
		body: 'Наши мастера обладают высокой квалификацией и опытом в области ремонта бытовой техники.',
		imgSrc: 'icons/diagnostic-icon.svg',
		type: 1,
	},
	{
		id: 2,
		title: 'Профи мастеры',
		body: 'Наши мастера обладают высокой квалификацией и опытом в области ремонта бытовой техники.',
		imgSrc: 'icons/people-icon-2.svg',
		type: 2,
	},
	{
		id: 3,
		title: 'Отзывы клиентов',
		body: 'Наши клиенты доверяют нам, оставляя положительные отзывы, которые подтверждают качество наших услуг.',
		imgSrc: 'icons/message-icon.svg',
		type: 1,
	},
	{
		id: 4,
		title: 'Гарантия качества',
		body: 'Предоставляем гарантию на выполненные работы и установленные запчасти, обеспечивая долгосрочную надежность ремонта на год.',
		imgSrc: 'icons/guard-icon.svg',
		type: 1,
	},
];

export const brands: Brand[] = [
	{
		id: 1,
		imgSrc: 'brands/midea.svg',
	},
	{
		id: 2,
		imgSrc: 'brands/lg.svg',
	},
	{
		id: 3,
		imgSrc: 'brands/beko.svg',
	},
	{
		id: 4,
		imgSrc: 'brands/bosch.svg',
	},
	{
		id: 5,
		imgSrc: 'brands/elecrtrolux.svg',
	},
	{
		id: 6,
		imgSrc: 'brands/samsung.svg',
	},
	{
		id: 7,
		imgSrc: 'brands/indesit.svg',
	},
];

export const feedbacks: Feedback[] = [
	{
		id: 1,
		title: 'Xорошо',
		body: 'Спасибо большое за хороший сервис и оперативность!',
		name: 'Анель',
		date: '28.11.2023',
	},
	{
		id: 1,
		title: 'Xорошо',
		body: 'Мастера на все руки. Осталась довольна ремонтом стиральной машины. Недолго и качественно. Спасибо!',
		name: 'Анель',
		date: '28.11.2023',
	},
];

export const masters: Master[] = [
	{
		id: 1,
		name: 'Андрей',
		body: 'Цена договорная Стиральная машина, холодильник',
		location: '2.7 км от вас',
		experience: '3 года',
		imgSrc: '',
	},
];

export const works: Work[] = [
	{
		id: 1,
		title: 'Звонок или Сообщение',
		body: 'Звоните или напишите нам прямо сейчас и закажите бесплатный выезд мастера на дом по Алмате',
	},
	{
		id: 2,
		title: 'Консультанция',
		body: 'Мы прокунсультируем вас о возможном ремонте вашей бытовой технике. Также узнайте стоимость ремонта заранее !',
	},
	{
		id: 3,
		title: 'Выезд мастера',
		body: 'Мастер выезжает на дом в удобное для вас время',
	},
	{
		id: 4,
		title: 'Результат и Гарантия',
		body: 'Качественный ремонт обеспечен, гарантия от 6 месяцев до 1 года.',
	},
];
