

import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../../components/homes/home-3/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import ImmigrationAppealsPage from './immigration-appeal-procedure';







const SelfSponsorshipDetails = () => {
  return (
    <>
      <HeaderOne />
        <ImmigrationAppealsPage />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default SelfSponsorshipDetails;