const AriclePage = ({
	params,
}: {
	params: { id: number };
}) => {
	return <div>My Post: {params.id}</div>;
};

export default AriclePage;
