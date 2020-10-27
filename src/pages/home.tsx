import React from 'react';
import Frases from '../components/Frases/Index';
import Section from '../components/Section/Section';
import LayoutIndex from '../layouts';

const PageHome = () => {
   return (
      <LayoutIndex>
         <Section />
         <Frases />
      </LayoutIndex>
   );
};

export default PageHome;
