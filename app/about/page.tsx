import React from 'react';
import Header from '@app/containers/about/Header';
import About from '@app/containers/about/About';
import Owner from '@app/containers/about/Owner';
import LogoDivider from '@app/containers/about/LogoDivider';
import Collage from '@app/containers/about/Collage';

const about = () => {
  return (
    <>
      <Header />
      <About />
      <Owner />
      <LogoDivider />
      <Collage />
    </>
  );
};

export default about;
