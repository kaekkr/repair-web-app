'use client';

import {
	dishwashersServices,
	washingMachinesServices,
} from '@/data';
import { useState } from 'react';
import Carousel from '../common/Carousel';
import ServiceDescriptionCard from './ServiceDescriptionCard';

type ServicesDescriptionProps = {
	title: string;
	buttons: {
		buttonTitle1: string;
		buttonTitle2: string;
		buttonTitle3: string;
		buttonTitle4: string;
	};
};

const ServicesDescription = ({
	title,
	buttons,
}: ServicesDescriptionProps) => {
	const [serviceView, setServiceView] =
		useState(1);

	const changeServiceView = (type: number) => {
		setServiceView(type);
	};

	const renderServiceView = (services: any[]) => {
		return (
			<div className='md:grid-cols-4 grid grid-rows-2 grid-cols-2 gap-4'>
				{services
					.slice(
						0,
						typeof window !== 'undefined' &&
							window.innerWidth >= 768
							? 8
							: 4
					)
					.map(service => (
						<ServiceDescriptionCard
							key={service.id}
							title={service.title}
							price={service.price}
						/>
					))}
			</div>
		);
	};

	const renderButtonView = () => {
		return (
			<div className='flex space-x-14'>
				{Object.values(buttons).map(
					(buttonTitle, index) => (
						<button
							key={index}
							onClick={() =>
								changeServiceView(index + 1)
							}
							className={`${
								serviceView === index + 1
									? 'button'
									: 'text-[#6E6E6E]'
							} py-2 px-5`}
						>
							{buttonTitle}
						</button>
					)
				)}
			</div>
		);
	};

	const renderMobileButtonView = () => {
		return (
			<Carousel type='button'>
				{Object.values(buttons).map(
					(buttonTitle, index) => (
						<button
							key={index}
							onClick={() =>
								changeServiceView(index + 1)
							}
							className={`${
								serviceView === index + 1
									? 'button'
									: 'text-[#6E6E6E]'
							} md:text-lg md:px-5 md:flex-[0_0_30%] flex-[0_0_50%] py-2 px-5 text-left`}
						>
							{buttonTitle}
						</button>
					)
				)}
			</Carousel>
		);
	};

	return (
		<div className='space-y-10 flex flex-col md:items-center'>
			<h1 className='md:text-center font-bold'>
				{title}
			</h1>
			{window?.innerWidth < 768
				? renderMobileButtonView()
				: renderButtonView()}
			{serviceView === 1 &&
				renderServiceView(
					washingMachinesServices
				)}
			{serviceView === 2 &&
				renderServiceView(dishwashersServices)}
			{serviceView === 3 &&
				renderServiceView(
					washingMachinesServices
				)}
			{serviceView === 4 &&
				renderServiceView(dishwashersServices)}
		</div>
	);
};

export default ServicesDescription;
