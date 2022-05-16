import React from 'react';
import images from '../../../shared/images/Images';
import { Banner1, Banner2, Banner3, Banner4 } from './Banner';
import { SlideshowWrapper } from './StyledComponents';

const Slideshow = () => {
  return (
    <SlideshowWrapper>
      <Banner1 img={images.wall1} />
      <Banner2 img={images.wall2} />
      <Banner3 img={images.wall3} />
      <Banner4 img={images.wall4} />
    </SlideshowWrapper>
  );
};

export default Slideshow;