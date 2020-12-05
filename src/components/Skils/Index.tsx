import React, { useState } from 'react';
import tasks from '../../api/data.json';
import imgSkilsList from '../../img/itemSkils.png';

function Skils() {
   const [state] = useState(tasks);

   return (
      <div className="skils">
         <h2>
            MASTERED SKILLS <span>(SKILLS)</span>
         </h2>

         {state.map((index: any) => (
            <div className="listSkils">
               <div className="titSkils">
                  <img src={imgSkilsList} alt="" />
                  <h3>{index.titulo}</h3>
               </div>

               {index.list.map((index2: any) => (
                  <div className="itemSkils fx">
                     <h3>{index2.nombre}</h3>
                     <div className="barra">
                        <div className="barraColor">
                           <div
                              className={
                                 'porcentajeColor ' +
                                 'porcen' +
                                 index2.porcentaje
                              }
                           ></div>
                        </div>
                     </div>
                     <div className="barraContent">
                        <span>{index2.porcentaje}</span>
                     </div>
                  </div>
               ))}
            </div>
         ))}
      </div>
   );
}

export default Skils;
