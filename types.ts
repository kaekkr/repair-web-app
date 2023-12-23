export type Tag = {
	id: number;
	title: string;
};

export type Master = {
	id: number;
	image: string;
	name: string;
	reviews: number;
	distance: string;
	experience: string;
	tags: Tag[];
};

export type Advantage = {
	id: number;
	title: string;
	body: string;
	imgSrc: string;
	type: number;
};

export type Brand = {
	id: number;
	imgSrc: string;
};

export type Work = {
	id: number;
	title: string;
	body: string;
};

export type LinkT = {
	id: number;
	title: string;
	slug: string;
};

export type Banner = {
	id: number;
	image: string;
	title: string;
	description: string;
};

export type Mark = {
	id: number;
	image: string;
	alt: string;
};

export type WhyWe = {
	id: number;
	image: string;
	title: string;
	description: string;
};

export type Service = {
	id: number;
	title: string;
	description: string;
	phone: string;
};

export type Review = {
	id: number;
	blog_id: number;
	name: string;
	description: string;
	date: string;
};

export type About = {
	id: number;
	image: string;
	title: string;
	description: string;
};

export type Certificate = {
	id: number;
	image: string;
	alt: string;
};

export type Fact = {
	id: number;
	number: number;
	image: string;
	alt: string;
};

export type MainPageData = {
	id: number;
	menu_id: number;
	title: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	slug: string;
	banner: Banner;
	marks: Mark[];
	why_we: WhyWe[];
	services: Service[];
	reviews: Review[];
	masters: Master[];
};

export type AboutPageData = {
	id: number;
	menu_id: number;
	title: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	slug: string;
	banner: Banner;
	about: About[];
	certificates: Certificate[];
	facts: Fact[];
};

export type ReviewsPageData = {
	id: number;
	menu_id: number;
	title: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	slug: string;
	banner: Banner;
	reviews: Review[];
};

export type MastersPageData = {
	id: number;
	menu_id: number;
	title: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	slug: string;
	banner: Banner;
	masters: Master[];
};

export type ServicesPageData = {
	id: number;
	menu_id: number;
	title: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	slug: string;
	banner: Banner;
	services: Service[];
	tags: Tag[];
	description_services: [];
	marks: Mark[];
};

export type Blog = {
	id: number;
	tag_id: number;
	tag: string;
	image: string;
	title: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	slug: string;
	read: number;
	date: string;
};

export type BlogsPageData = {
	id: number;
	menu_id: number;
	title: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	slug: string;
	banner: Banner;
	tags: Tag[];
	blogs: Blog[];
};

export type SimilarArticle = {
	id: number;
	tag_id: number;
	tag: string;
	image: string;
	title: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	slug: string;
	read: number;
	date: string;
};

export type ArticlePageData = {
	id: number;
	tag_id: number;
	tag: string;
	image: string;
	title: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	slug: string;
	read: number;
	date: string;
	similar: SimilarArticle[];
	reviews: Review[];
};
