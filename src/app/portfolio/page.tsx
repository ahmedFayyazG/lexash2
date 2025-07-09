 
import Portfolio from "@/components/portfolio";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
	title: "Portfolio ",
	description: "Portfolio Vorix - Creative Digital Agency HTML Template",
	 
};

const index = () => {
	return (
		<Wrapper>
			<Portfolio />
		</Wrapper>
	);
};

export default index;
