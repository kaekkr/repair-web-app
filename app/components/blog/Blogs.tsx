'use client';

import { useState } from 'react';

import Carousel from '../common/Carousel';
import BlogCard from './BlogCard';
import { Blog } from '@/types';

type BlogsProps = {
	buttons: {
		buttonTitle1: string;
		buttonTitle2: string;
		buttonTitle3: string;
		buttonTitle4: string;
	};
	title: string;
	blogs: Blog[];
};

const Blogs = ({
	buttons,
	title,
	blogs,
}: BlogsProps) => {
	const [blogView, setBlogView] = useState(1);

	const changeBlogView = (tagId: number) => {
		setBlogView(tagId);
	};

	const filterBlogsByTag = (tagId: number) => {
		return blogs.filter(
			blog => blog.tag_id === tagId
		);
	};

	const renderBlogView = (tagId: number) => {
		return (
			<div className='grid grid-rows-2 grid-cols-4 gap-4'>
				{filterBlogsByTag(tagId)
					.slice(0, 10)
					.map(blog => (
						<BlogCard
							key={blog.id}
							id={blog.id}
							title={blog.title}
							body={blog.description}
							type={blog.tag}
							imgSrc={blog.image}
							date={blog.date}
						/>
					))}
			</div>
		);
	};

	const renderMobileBlogView = (
		tagId: number
	) => {
		return (
			<Carousel title={title} type=''>
				{filterBlogsByTag(tagId)
					.slice(0, 10)
					.map(blog => (
						<BlogCard
							key={blog.id}
							id={blog.id}
							title={blog.title}
							type={blog.tag}
							imgSrc={blog.image}
							date={blog.date}
						/>
					))}
			</Carousel>
		);
	};

	return (
		<div className='space-y-10 flex flex-col md:items-center'>
			<Carousel type='button'>
				{Object.values(buttons).map(
					(buttonTitle, index) => (
						<button
							key={index}
							onClick={() =>
								changeBlogView(index + 1)
							}
							className={`${
								blogView === index + 1
									? 'button'
									: 'text-[#6E6E6E]'
							} md:text-lg md:px-5 md:flex-[0_0_30%] flex-[0_0_50%] py-2 px-3 text-left`}
						>
							{buttonTitle}
						</button>
					)
				)}
			</Carousel>
			<h1 className='md:block hidden font-bold text-center'>
				{title}
			</h1>
			{window?.innerWidth < 768
				? renderMobileBlogView(blogView)
				: renderBlogView(blogView)}
		</div>
	);
};

export default Blogs;
