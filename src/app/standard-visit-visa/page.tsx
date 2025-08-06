

import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../../components/homes/home-3/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import StandardVisitorVisaPage from './standard-visit-visa';



// import ServiceDetailsArea from './ServiceDetailsArea';


const SelfSponsorshipDetails = () => {
  return (
    <>
      <HeaderOne />
      <StandardVisitorVisaPage />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default SelfSponsorshipDetails;