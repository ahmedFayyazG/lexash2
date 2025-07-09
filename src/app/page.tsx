 
import HomeOne from "@/components/homes/home";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Lexington Ashworth",
	description: "Lexington Ashworth", 
};

const index = () => {
	return (
		<Wrapper>
			<HomeOne />
		</Wrapper>
	);
};

export default index;
