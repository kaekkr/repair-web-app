interface WorkCardProps {
	title: string;
	body: string;
}

const WorkCard = ({
	title,
	body,
}: WorkCardProps) => {
	return (
		<div>
			<h1>{title}</h1>
			<p>{body}</p>
		</div>
	);
};

export default WorkCard;
