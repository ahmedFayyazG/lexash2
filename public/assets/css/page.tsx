 
import Aboutus from "@/components/about-us"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "About us Lexington Ashworth",
	description: "Lexington Ashworth", 
};

const index = () => {
	return (
		<Wrapper>
			<Aboutus />
		</Wrapper>
	);
};

export default index;
