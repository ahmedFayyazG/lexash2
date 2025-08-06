

import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../../components/homes/home-3/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import SelfSponsorshipRequirementsPage from './self-sponsorship-req';

// import ServiceDetailsArea from './ServiceDetailsArea';


const SelfSponsorshipDetails = () => {
  return (
    <>
      <HeaderOne />
        <SelfSponsorshipRequirementsPage />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default SelfSponsorshipDetails;