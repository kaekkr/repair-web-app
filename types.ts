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
