 
import BlogDetails from "@/components/blog-details";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Blog Details Lexington Ashworth",
	description: "Lexington Ashworth",
	 
};

const index = () => {
	return (
		<Wrapper>
			<BlogDetails />
		</Wrapper>
	);
};

export default index;
