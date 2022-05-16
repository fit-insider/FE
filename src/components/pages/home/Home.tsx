import React from 'react';
import Page from '../../layout/page-wrapper/Page';
import MainForm from './main-form/MainForm';
import Slideshow from './slideshow/Slideshow';

const HomePage = () => {
  return (
    <Page>
      <Slideshow />
      <MainForm />
    </Page>
  );
};

export default HomePage;