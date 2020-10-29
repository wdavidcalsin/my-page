import React from 'react';
import ImgEdison from '../../img/fraseEdison.png';
import ImgJobs from '../../img/fraseJobs1.png';

function Frases() {
   return (
      <div className="FrasesContent">
         <div className="container">
            <div className="itemFrase">
               <div className="img-frase">
                  <img
                     src="https://www.pngkit.com/png/full/217-2174639_bill-gates-png-photos-bill-gates-png.png"
                     alt=""
                  />
               </div>
               <div className="content-frase">
                  <p>
                     Si tu negocio no está en Internet, tu negocio no existe.
                  </p>
                  <span>@Bill Gates</span>
               </div>
            </div>
            <div className="itemFrase">
               <div className="img-frase">
                  <img src={ImgJobs} alt="" />
               </div>
               <div className="content-frase">
                  <p>El diseño es el alma de todo lo creado por el hombre.</p>
                  <span>@Steve Jobs</span>
               </div>
            </div>
            <div className="itemFrase">
               <div className="img-frase">
                  <img src={ImgEdison} alt="" />
               </div>
               <div className="content-frase">
                  <p>
                     Que algo no haya salido como hayas querido no significa que
                     sea inútil.
                  </p>
                  <span>@Thomas Edison</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Frases;
