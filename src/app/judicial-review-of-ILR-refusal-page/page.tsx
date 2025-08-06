

import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../../components/homes/home-3/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import JudicialReviewILRPage from './judicial-review-of-ILR-refusal-page';





const SelfSponsorshipDetails = () => {
  return (
    <>
      <HeaderOne />
        <JudicialReviewILRPage />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default SelfSponsorshipDetails;