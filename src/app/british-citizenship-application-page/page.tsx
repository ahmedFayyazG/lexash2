

import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../../components/homes/home-3/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import BritishCitizenship from './british-citizenship-application-page';



const SelfSponsorshipDetails = () => {
  return (
    <>
      <HeaderOne />
        <BritishCitizenship />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default SelfSponsorshipDetails;