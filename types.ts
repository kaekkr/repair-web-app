export interface Feedback {
	id: number;
	title: string;
	body: string;
	name: string;
	date: string;
}

export interface Master {
	id: number;
	name: string;
	body: string;
	location: string;
	experience: string;
	imgSrc: string;
}

export interface Advantage {
	id: number;
	title: string;
	body: string;
	imgSrc: string;
	type: number;
}

export interface Brand {
	id: number;
	imgSrc: string;
}

export interface Work {
	id: number;
	title: string;
	body: string;
}

export interface Banner {
	id: number;
	image: string;
	title: string;
	description: string;
}

export interface Mark {
	id: number;
	image: string;
	alt: string;
}

export interface WhyWe {
	id: number;
	image: string;
	title: string;
	description: string;
}

export interface Service {
	id: number;
	title: string;
	description: string;
	phone: string;
}

export interface MainPageData {
	id: number;
	menu_id: number;
	title: string;
	description: string;
	meta_title: string;
	meta_description: string;
	meta_keywords: string;
	slug: string
	banner: Banner
	marks: Mark[];
	why_we: WhyWe[];
	services: Service[];
}