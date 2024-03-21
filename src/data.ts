import { CookingClass } from "./types";

export const cookingClasses: CookingClass[] = [
	{
		id: 0,
		title: "Chicago Pizza Making",
		imageUrl:
			"https://res.cloudinary.com/djxfhec23/image/upload/v1710965261/CPF/pizzaclass_v3orpc.jpg",
		startTime: new Date("2024-03-25T09:00:00"),
		endTime: new Date("2024-03-25T12:00:00"),
	},
	{
		id: 1,
		title: "Italian Pasta Making",
		imageUrl:
			"https://res.cloudinary.com/djxfhec23/image/upload/v1710968189/CPF/pastaclass_lv3sed.jpg",
		startTime: new Date("2024-04-03T12:30:00"),
		endTime: new Date("2024-04-03T15:30:00"),
	},
	{
		id: 2,
		title: "French Pastry Fundamentals",
		imageUrl:
			"https://res.cloudinary.com/djxfhec23/image/upload/v1710968190/CPF/pastryclass_ecgqbq.jpg",
		startTime: new Date("2024-04-07T16:00:00"),
		endTime: new Date("2024-04-07T19:00:00"),
	},
	{
		id: 3,
		title: "Sushi Mastery",
		imageUrl:
			"https://res.cloudinary.com/djxfhec23/image/upload/v1710968188/CPF/SushiClass_m21dc7.jpg",
		startTime: new Date("2024-04-13T09:00:00"),
		endTime: new Date("2024-04-13T12:00:00"),
	},
	{
		id: 4,
		title: "Indian Spices 101",
		imageUrl:
			"https://res.cloudinary.com/djxfhec23/image/upload/v1710968190/CPF/IndianSpicesClass_wt7osw.jpg",
		startTime: new Date("2024-04-20T12:30:00"),
		endTime: new Date("2024-04-20T15:30:00"),
	},
	{
		id: 5,
		title: "BBQ and Grilling Techniques",
		imageUrl:
			"https://res.cloudinary.com/djxfhec23/image/upload/v1710968189/CPF/GrillingClass_vbgjdz.jpg",
		startTime: new Date("2024-04-25T16:00:00"),
		endTime: new Date("2024-04-25T19:00:00"),
	},
];

export const cookingClassDates = cookingClasses.map((c) => c.startTime);
