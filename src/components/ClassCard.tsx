interface ClassCardProps {
	classTitle: string;
	imageUrl: string;
}

export default function ClassCard({ classTitle, imageUrl }: ClassCardProps) {
	return (
		<div>
			<div className="relative flex flex-col items-center justify-center h-96 w-64 rounded-md overflow-hidden hover:scale-105">
				<img
					src={imageUrl}
					alt="Class"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="relative z-10 flex flex-col items-center justify-end h-full mx-4">
					<button className="bg-mountain-stone w-full text-white rounded-md text-xl m-4">
						{classTitle}
					</button>
				</div>
			</div>
		</div>
	);
}
