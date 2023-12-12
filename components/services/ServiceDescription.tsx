import ServiceDescriptionCard from './ServiceDescriptionCard';

interface ServiceDescriptionProps {
	children: React.ReactNode;
}

const ServiceDescription = ({
	children,
}: ServiceDescriptionProps) => {
	return (
		<div className='grid grid-rows-2 grid-cols-4 gap-4'>
			{children}
		</div>
	);
};

export default ServiceDescription;
