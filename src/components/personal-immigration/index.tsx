import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import Cta2Area from '../homes/home-3/Cta2Area';
import FooterOne from '@/layouts/footers/FooterOne';
import PersonalimmigraionArea from './personalImmigrationDetailsArea';


export default function personalImmigration () {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Personal Immigration" subtitle="Our Services" />
      {/* <ServiceDetailsArea /> */}
      <PersonalimmigraionArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};