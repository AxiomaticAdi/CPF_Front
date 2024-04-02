export type CookingClass = {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
	startTime: Date;
	endTime: Date;
	capacity: number;
	sold: number;
};

export type BlogPost = {
	id: string;
	postTitle: string;
	postDescription: string;
	postContent: string;
	postImageUrl: string;
	postDate: string;
};
