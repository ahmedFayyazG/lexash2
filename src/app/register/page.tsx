
 
import Register from "@/components/register"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Register Lexington Ashworth",
	description: "Lexington Ashworth",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Register />
		</Wrapper>
	);
};

export default index;
