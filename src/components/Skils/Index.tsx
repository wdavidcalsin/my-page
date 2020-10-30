import React from 'react';
import imgSkilsList from '../../img/itemSkils.png';

function Skils() {
   return (
      <div className="skils">
         <h2>
            HABILIDADES DOMINADAS <span>(SKILLS)</span>
         </h2>
         <div className="listSkils">
            <div className="titSkils">
               <img src={imgSkilsList} alt="" />
               <h3>Maquetacion pagina web</h3>
            </div>
            <div className="itemSkils fx">
               <h3>Pug / Jade</h3>
               <div className="barra">
                  <div className="barraColor"></div>
               </div>
               <div className="barraContent">
                  <span>100</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Skils;
