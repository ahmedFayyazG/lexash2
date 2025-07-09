 
import Blog from "@/components/blog";  
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Blog Lexington Ashworth",
	description: "Lexington Ashworth",
	
};

const index = () => {
	return (
		<Wrapper>
			<Blog />
		</Wrapper>
	);
};

export default index;
