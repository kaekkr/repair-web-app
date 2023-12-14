'use client';

import ServiceDescriptionCard from './ServiceDescriptionCard';
import {
	dishwashersServices,
	washingMachinesServices,
} from '@/data';
import ServiceDescription from './ServiceDescription';
import { useState } from 'react';
import Carousel from '../common/Carousel';

const ServicesDescription = () => {
	const [serviceView, setServiceView] =
		useState(1);

	const changeServiceView = (type: number) => {
		setServiceView(type);
	};

	return (
		<div className='space-y-10 flex flex-col md:items-center'>
			<h1 className='md:text-center font-bold'>
				Описание услуг
			</h1>
			{window.innerWidth < 768 ? (
				<Carousel type='button'>
					<button
						onClick={() => changeServiceView(1)}
						className={`${
							serviceView === 1
								? 'button'
								: 'text-[#6E6E6E]'
						} py-2 md:px-5 px-3 text-left`}
					>
						Стиральные машины
					</button>
					<button
						onClick={() => changeServiceView(2)}
						className={`${
							serviceView === 2
								? 'button'
								: 'text-[#6E6E6E]'
						} py-2 md:px-5 px-3 text-left`}
					>
						Посудомоечные машины
					</button>
					<button
						onClick={() => changeServiceView(3)}
						className={`${
							serviceView === 3
								? 'button'
								: 'text-[#6E6E6E]'
						} py-2 md:px-5 px-3 text-left`}
					>
						Холодильники
					</button>
					<button
						onClick={() => changeServiceView(4)}
						className={`${
							serviceView === 4
								? 'button'
								: 'text-[#6E6E6E]'
						} py-2 md:px-5 px-3 text-left`}
					>
						Кондиционеры
					</button>
				</Carousel>
			) : (
				<div className='flex space-x-14'>
					<button
						onClick={() => changeServiceView(1)}
						className={`${
							serviceView === 1
								? 'button'
								: 'text-[#6E6E6E]'
						} py-2 px-5`}
					>
						Стиральные машины
					</button>
					<button
						onClick={() => changeServiceView(2)}
						className={`${
							serviceView === 2
								? 'button'
								: 'text-[#6E6E6E]'
						} py-2 px-5`}
					>
						Посудомоечные машины
					</button>
					<button
						onClick={() => changeServiceView(3)}
						className={`${
							serviceView === 3
								? 'button'
								: 'text-[#6E6E6E]'
						} py-2 px-5`}
					>
						Холодильники
					</button>
					<button
						onClick={() => changeServiceView(4)}
						className={`${
							serviceView === 4
								? 'button'
								: 'text-[#6E6E6E]'
						} py-2 px-5`}
					>
						Кондиционеры
					</button>
				</div>
			)}
			{serviceView === 1 && (
				<ServiceDescription>
					{washingMachinesServices
						.slice(
							0,
							window.innerWidth >= 768 ? 8 : 4
						)
						.map(washingMachinesService => (
							<ServiceDescriptionCard
								key={washingMachinesService.id}
								title={
									washingMachinesService.title
								}
								price={
									washingMachinesService.price
								}
							/>
						))}
				</ServiceDescription>
			)}
			{serviceView === 2 && (
				<ServiceDescription>
					{dishwashersServices
						.slice(
							0,
							window.innerWidth >= 768 ? 8 : 4
						)
						.map(dishwashersService => (
							<ServiceDescriptionCard
								key={dishwashersService.id}
								title={dishwashersService.title}
								price={dishwashersService.price}
							/>
						))}
				</ServiceDescription>
			)}
			{serviceView === 3 && (
				<ServiceDescription>
					{washingMachinesServices
						.slice(
							0,
							window.innerWidth >= 768 ? 8 : 4
						)
						.map(washingMachinesService => (
							<ServiceDescriptionCard
								key={washingMachinesService.id}
								title={
									washingMachinesService.title
								}
								price={
									washingMachinesService.price
								}
							/>
						))}
				</ServiceDescription>
			)}
			{serviceView === 4 && (
				<ServiceDescription>
					{dishwashersServices
						.slice(
							0,
							window.innerWidth >= 768 ? 8 : 4
						)
						.map(dishwashersService => (
							<ServiceDescriptionCard
								key={dishwashersService.id}
								title={dishwashersService.title}
								price={dishwashersService.price}
							/>
						))}
				</ServiceDescription>
			)}
		</div>
	);
};

export default ServicesDescription;
