import Page from "../components/Page";

export default function AboutPage() {
	return (
		<Page>
			<h1 className="text-4xl font-bold mb-6">About</h1>

			<div className="flex flex-wrap items-center justify-center w-full gap-8">
				<img
					src="https://res.cloudinary.com/djxfhec23/image/upload/v1711083955/CPF/chefmark_vu2wiw.jpg"
					className="max-w-96 rounded-md"
				/>
				<div className="flex flex-col max-w-96 gap-2">
					<h1 className="text-xl font-bold text-center">Meet the Chef</h1>
					<p className="text-left">
						Chef Mark Pelliccia's culinary journey started at the age of ten,
						when his family moved from New York to San Diego and his father
						opened up the Italian restaurant Luigi’s at the Beach in Mission
						Beach. After high school, following his passion for food,
						18-year-old Mark set out alone to Italy with intentions to attend
						culinary school. He fell in love with the country, so after he
						completed his training, he decided stay for 15 more years. His
						culinary education includes Hotel and Restaurant Management and a
						year-long enrollment at a Pastry School in Venice, taught by the
						best chef’s throughout Europe. Mark's cooking is a testament to his
						global travels and passion for fusion d cuisine. His signature
						dishes at 25 Forty Bistro and Bakehouse, renowned for blending
						modernist techniques with Old World traditions, feature locally
						sourced, sustainable ingredients crafted into masterpieces.
					</p>

					<p className="text-left">
						Each class with Chef Pelliccia is more than a lesson in cooking;
						it's an invitation to explore a world of flavors and textures.
						Whether you're a seasoned foodie or a curious beginner, Mark's
						hands-on classes offer a unique opportunity to learn from a master
						chef who continues to redefine gourmet cooking. Embrace the chance
						to transform simple ingredients into extraordinary meals and carry a
						piece of Mark's culinary wisdom with you.
					</p>
				</div>
			</div>
		</Page>
	);
}
