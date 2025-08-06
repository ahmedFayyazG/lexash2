

import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../../components/homes/home-3/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import SponsorLicenceSuspendedPage from './sponsorship-licence-suspended';


// import ServiceDetailsArea from './ServiceDetailsArea';


const SelfSponsorshipDetails = () => {
  return (
    <>
      <HeaderOne />
      <SponsorLicenceSuspendedPage />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default SelfSponsorshipDetails;