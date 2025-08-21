

import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../../components/homes/home-3/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import PersonalImmigrationPage from './personal-immigration-detail-page';







const SelfSponsorshipDetails = () => {
  return (
    <>
      <HeaderOne />
        <PersonalImmigrationPage/>
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default SelfSponsorshipDetails;