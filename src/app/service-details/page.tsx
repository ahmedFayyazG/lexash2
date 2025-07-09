 
import ServiceDetails from "@/components/service-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Service Details Lexington Ashworth",
	description: "Lexington Ashworth",
	 
};

const index = () => {
	return (
		<Wrapper>
			<ServiceDetails />
		</Wrapper>
	);
};

export default index;
