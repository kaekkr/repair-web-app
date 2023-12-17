'use client';

import { useState } from 'react';

import { washingMachinesBlogs } from '@/data';
import Carousel from '../common/Carousel';
import BlogCard from './BlogCard';

const Blogs = () => {
	const [blogView, setBlogView] = useState(1);

	const changeBlogView = (type: number) => {
		setBlogView(type);
	};

	return (
		<div className='space-y-10'>
			<Carousel type='button'>
				<button
					onClick={() => changeBlogView(1)}
					className={`${
						blogView === 1
							? 'button'
							: 'text-[#6E6E6E]'
					} md:text-lg md:italic md:px-5 md:flex-[0_0_30%] flex-[0_0_50%] px-3 text-left `}
				>
					Ремонт Стиральных Машин
				</button>
				<button
					onClick={() => changeBlogView(2)}
					className={`${
						blogView === 2
							? 'button'
							: 'text-[#6E6E6E]'
					} md:text-lg md:italic md:px-5 md:flex-[0_0_30%] flex-[0_0_50%] px-3 text-left`}
				>
					Обслуживание Холодильников
				</button>
				<button
					onClick={() => changeBlogView(3)}
					className={`${
						blogView === 3
							? 'button'
							: 'text-[#6E6E6E]'
					} md:text-lg md:italic md:px-5 md:flex-[0_0_30%] flex-[0_0_50%] px-3 text-left`}
				>
					Новости и Тенденции в Мире Бытовой
					Техники
				</button>
				<button
					onClick={() => changeBlogView(4)}
					className={`${
						blogView === 4
							? 'button'
							: 'text-[#6E6E6E]'
					} md:text-lg md:italic md:px-5 md:flex-[0_0_30%] flex-[0_0_50%] px-3 text-left`}
				>
					Советы по Энергосбережению
				</button>
			</Carousel>
			<h1 className='md:block hidden font-bold text-center'>
				Самые последние
			</h1>
			{typeof window !== "undefined" && window.innerWidth < 768
				? blogView === 1 && (
						<Carousel
							title='Самые последние'
							type='blog'
						>
							{washingMachinesBlogs.map(
								washingMachinesBlog => (
									<BlogCard
										key={washingMachinesBlog.id}
										id={washingMachinesBlog.id}
										title={
											washingMachinesBlog.title
										}
										type={
											washingMachinesBlog.type
										}
										imgSrc={
											washingMachinesBlog.imgSrc
										}
										date={
											washingMachinesBlog.date
										}
									/>
								)
							)}
						</Carousel>
				  )
				: blogView === 1 && (
						<div className='grid grid-rows-2 grid-cols-4 gap-4'>
							{washingMachinesBlogs.map(
								washingMachinesBlog => (
									<BlogCard
										key={washingMachinesBlog.id}
										id={washingMachinesBlog.id}
										title={
											washingMachinesBlog.title
										}
										body={
											washingMachinesBlog.body
										}
										type={
											washingMachinesBlog.type
										}
										imgSrc={
											washingMachinesBlog.imgSrc
										}
										date={
											washingMachinesBlog.date
										}
									/>
								)
							)}
						</div>
				  )}
			{typeof window !== "undefined" && window.innerWidth < 768
				? blogView === 2 && (
						<Carousel
							title='Самые последние'
							type='blog'
						>
							{washingMachinesBlogs.map(
								washingMachinesBlog => (
									<BlogCard
										key={washingMachinesBlog.id}
										id={washingMachinesBlog.id}
										title={
											washingMachinesBlog.title
										}
										type={
											washingMachinesBlog.type
										}
										imgSrc={
											washingMachinesBlog.imgSrc
										}
										date={
											washingMachinesBlog.date
										}
									/>
								)
							)}
						</Carousel>
				  )
				: blogView === 2 && (
						<div className='grid grid-rows-2 grid-cols-4 gap-4'>
							{washingMachinesBlogs.map(
								washingMachinesBlog => (
									<BlogCard
										key={washingMachinesBlog.id}
										id={washingMachinesBlog.id}
										title={
											washingMachinesBlog.title
										}
										body={
											washingMachinesBlog.body
										}
										type={
											washingMachinesBlog.type
										}
										imgSrc={
											washingMachinesBlog.imgSrc
										}
										date={
											washingMachinesBlog.date
										}
									/>
								)
							)}
						</div>
				  )}
			{typeof window !== "undefined" && window.innerWidth < 768
				? blogView === 3 && (
						<Carousel
							title='Самые последние'
							type='blog'
						>
							{washingMachinesBlogs.map(
								washingMachinesBlog => (
									<BlogCard
										key={washingMachinesBlog.id}
										id={washingMachinesBlog.id}
										title={
											washingMachinesBlog.title
										}
										type={
											washingMachinesBlog.type
										}
										imgSrc={
											washingMachinesBlog.imgSrc
										}
										date={
											washingMachinesBlog.date
										}
									/>
								)
							)}
						</Carousel>
				  )
				: blogView === 3 && (
						<div className='grid grid-rows-2 grid-cols-4 gap-4'>
							{washingMachinesBlogs.map(
								washingMachinesBlog => (
									<BlogCard
										key={washingMachinesBlog.id}
										id={washingMachinesBlog.id}
										title={
											washingMachinesBlog.title
										}
										body={
											washingMachinesBlog.body
										}
										type={
											washingMachinesBlog.type
										}
										imgSrc={
											washingMachinesBlog.imgSrc
										}
										date={
											washingMachinesBlog.date
										}
									/>
								)
							)}
						</div>
				  )}
			{typeof window !== "undefined" && window.innerWidth < 768
				? blogView === 4 && (
						<Carousel
							title='Самые последние'
							type='blog'
						>
							{washingMachinesBlogs.map(
								washingMachinesBlog => (
									<BlogCard
										key={washingMachinesBlog.id}
										id={washingMachinesBlog.id}
										title={
											washingMachinesBlog.title
										}
										type={
											washingMachinesBlog.type
										}
										imgSrc={
											washingMachinesBlog.imgSrc
										}
										date={
											washingMachinesBlog.date
										}
									/>
								)
							)}
						</Carousel>
				  )
				: blogView === 4 && (
						<div className='grid grid-rows-2 grid-cols-4 gap-4'>
							{washingMachinesBlogs.map(
								washingMachinesBlog => (
									<BlogCard
										key={washingMachinesBlog.id}
										id={washingMachinesBlog.id}
										title={
											washingMachinesBlog.title
										}
										body={
											washingMachinesBlog.body
										}
										type={
											washingMachinesBlog.type
										}
										imgSrc={
											washingMachinesBlog.imgSrc
										}
										date={
											washingMachinesBlog.date
										}
									/>
								)
							)}
						</div>
				  )}
		</div>
	);
};

export default Blogs;
