import type { Project } from "@/.contentlayer/generated";
import { Card } from "../components/card";

type Props = {
	project: Project;
};

export const Article: React.FC<Props> = ({ project }) => {
	return (
		<a 
			href={`/projects/${project.slug}`} 
			className="block w-full h-full"
			onClick={(e) => {
				e.preventDefault();
				console.log("Clicked project:", project.title, "Slug:", project.slug);
				window.location.href = `/projects/${project.slug}`;
			}}
		>
			<Card>
				<article className="p-4 md:p-8">
					<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
						{project.title}
					</h2>
					<p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
						{project.description}
					</p>
				</article>
			</Card>
		</a>
	);
};