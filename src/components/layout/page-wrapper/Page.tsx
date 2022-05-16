import React from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import { PageContent, PageWrapper } from './StyledComponents';

const Page = ({ children }) => {
  return (
    <PageWrapper>
      <Navbar />
      <PageContent>
        {children}
        <Footer />
      </PageContent>
    </PageWrapper>
  );
};

export default Page;