import React from 'react';
import { ProjectList } from '../api/projectList';
import Card from '../components/Card/Card';
import LayoutIndex from '../layouts';

const Projetcs = () => {
   return (
      <LayoutIndex>
         <div className="projects">
            <div className="container">
               <h3 className="page-title">Projetcs</h3>
               <div className="cards">
                  {ProjectList.map((item, index) => (
                     <Card img={item.img} title={item.title} key={index} />
                  ))}
               </div>
            </div>
         </div>
      </LayoutIndex>
   );
};

export default Projetcs;
