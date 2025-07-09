
import ErrorArea from '@/components/error';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
	title: "404 Error || Lexington Ashworth",
	description: "Lexington Ashworth", 
};



const index = () => {
  return (
    <Wrapper>
      <ErrorArea />      
    </Wrapper>
  );
};

export default index;