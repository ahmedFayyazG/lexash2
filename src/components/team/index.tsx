
import React from 'react';
import TeamArea from './TeamArea';
import Breacrumb from '@/common/Breacrumb';
import Cta2Area from '../homes/home-3/Cta2Area';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import CategoryArea from '../homes/home/CategoryArea';
import TestimonialArea from '../homes/home/TestimonialArea';

const Team = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Expert Team" subtitle="Team" />
      <TeamArea />
      <CategoryArea />
      <TestimonialArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default Team;