

import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../../components/homes/home-3/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import LongResidenceILRPage from './long-residence-ILR-page';





const SelfSponsorshipDetails = () => {
  return (
    <>
      <HeaderOne />
        <LongResidenceILRPage />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default SelfSponsorshipDetails;