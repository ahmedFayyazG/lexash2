 
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
// import Cta2Area from '../homes/home-2/Cta2Area';
import AboutArea from '../homes/home-3/AboutArea';
import VideoArea from '../homes/home/VideoArea';
import WorkprocessArea from '../homes/home-3/WorkprocessArea';
import VideoAreaHomeOne from '../homes/home-3/VideoAreaHomeOne';
import TeamArea from '../homes/home/TeamArea';
import TestimonialArea from '../homes/home/TestimonialArea';
import FooterOne from '@/layouts/footers/FooterOne';
import Cta2Area from '../homes/home-3/Cta2Area';




const Aboutus = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="About us" subtitle="About" />
      <AboutArea />
      <WorkprocessArea />
      <VideoAreaHomeOne />
      <TeamArea />
      <TestimonialArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default Aboutus;