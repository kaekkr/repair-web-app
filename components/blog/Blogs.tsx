'use client';

import { useState } from 'react';
import CarouselWithStates from '../common/CarouselWithStates';

const Blogs = () => {
	const [blogView, setBlogView] = useState(1);

	const changeBlogView = (type: number) => {
		setBlogView(type);
	};

	return (
		<div className='space-y-10'>
			<h1 className='font-bold text-center'>
				Описание услуг
			</h1>
			<CarouselWithStates>
				<div>
					<button className='text-[#6E6E6E] italic text-lg'>
						Ремонт Стиральных Машин
					</button>
				</div>
				<div>
					<button className='text-[#6E6E6E] italic text-lg'>
						Обслуживание Холодильников
					</button>
				</div>
				<div>
					<button className='text-[#6E6E6E] italic text-lg'>
						Новости и Тенденции в Мире Бытовой
						Техники
					</button>
				</div>
				<div>
					<button className='text-[#6E6E6E] italic text-lg'>
						Советы по Энергосбережению
					</button>
				</div>
			</CarouselWithStates>
			{/* {blogView === 1 && (
				<ServiceDescription>
					{washingMachinesServices.map(
						washingMachinesService => (
							<ServiceDescriptionCard
								key={washingMachinesService.id}
								title={
									washingMachinesService.title
								}
								price={
									washingMachinesService.price
								}
							/>
						)
					)}
				</ServiceDescription>
			)}
			{blogView === 2 && (
				<ServiceDescription>
					{dishwashersServices.map(
						dishwashersService => (
							<ServiceDescriptionCard
								key={dishwashersService.id}
								title={dishwashersService.title}
								price={dishwashersService.price}
							/>
						)
					)}
				</ServiceDescription>
			)}
			{blogView === 3 && (
				<ServiceDescription>
					{washingMachinesServices.map(
						washingMachinesService => (
							<ServiceDescriptionCard
								key={washingMachinesService.id}
								title={
									washingMachinesService.title
								}
								price={
									washingMachinesService.price
								}
							/>
						)
					)}
				</ServiceDescription>
			)}
			{blogView === 4 && (
				<ServiceDescription>
					{washingMachinesServices.map(
						washingMachinesService => (
							<ServiceDescriptionCard
								key={washingMachinesService.id}
								title={
									washingMachinesService.title
								}
								price={
									washingMachinesService.price
								}
							/>
						)
					)}
				</ServiceDescription>
			)} */}
		</div>
	);
};

export default Blogs;
