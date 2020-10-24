import React, { FC, Fragment } from 'react';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const LayoutIndex: FC = React.memo((props) => {
   const { children } = props;

   return (
      <Fragment>
         <Header />
         {children}
         <Footer />
      </Fragment>
   );
});

export default LayoutIndex;
