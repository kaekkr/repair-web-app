import ServiceDescriptionCard from './ServiceDescriptionCard';

interface ServiceDescriptionProps {
	children: React.ReactNode;
}

const ServiceDescription = ({
	children,
}: ServiceDescriptionProps) => {
	return (
		<div className='md:grid-cols-4 grid grid-rows-2 grid-cols-2 gap-4'>
			{children}
		</div>
	);
};

export default ServiceDescription;
