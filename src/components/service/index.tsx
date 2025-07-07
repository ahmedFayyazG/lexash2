
import React from 'react';
import ServiceArea from './ServiceArea';
import ServiceAbout from './ServiceAbout';
import Breacrumb from '@/common/Breacrumb';
import HeaderOne from '@/layouts/headers/HeaderOne';
import PriceArea from '../homes/home/PriceArea';
import FooterOne from '@/layouts/footers/FooterOne';
import CtaArea from '../homes/home-3/CtaArea';

const Service = () => {
  return (
    <>
    <HeaderOne />
    <Breacrumb title="Services" subtitle="Services" />
    <ServiceArea />
    {/* <ServiceAbout /> */}
    {/* <PriceArea style_2={true} /> */}
    <CtaArea />
    <FooterOne />      
    </>
  );
};

export default Service;