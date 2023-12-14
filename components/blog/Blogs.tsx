'use client';

import { useState } from 'react';
import Carousel from '../common/Carousel';

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
			<Carousel type='button'>
				<div>
					<button className='md:text-lg text-[#6E6E6E] italic'>
						Ремонт Стиральных Машин
					</button>
				</div>
				<div>
					<button className='md:text-lg text-[#6E6E6E] italic'>
						Обслуживание Холодильников
					</button>
				</div>
				<div>
					<button className='md:text-lg text-[#6E6E6E] italic'>
						Новости и Тенденции в Мире Бытовой
						Техники
					</button>
				</div>
				<div>
					<button className='md:text-lg text-[#6E6E6E] italic'>
						Советы по Энергосбережению
					</button>
				</div>
			</Carousel>
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
