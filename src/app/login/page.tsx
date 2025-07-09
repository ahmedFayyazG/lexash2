 
import Login from "@/components/login"; 
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Login Lexington Ashworth",
	description: "Lexington Ashworth",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Login />
		</Wrapper>
	);
};

export default index;
