interface WorkCardProps {
	title: string;
	body: string;
}

const WorkCard = ({
	title,
	body,
}: WorkCardProps) => {
	return (
		<div className='bg-white rounded-xl p-10'>
			<h1>1.{title}</h1>
			<p>{body}</p>
		</div>
	);
};

export default WorkCard;
