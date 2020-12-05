import React from 'react';
import ImgEdison from '../../img/fraseEdison.png';
import ImgJobs from '../../img/fraseJobs1.png';

function Frases() {
   return (
      <div className="FrasesContent">
         <h2 className="title-frase">Motivation Phrases</h2>
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
                     If your business is not on the Internet, your business does
                     not exist.
                  </p>
                  <span>@Bill Gates</span>
               </div>
            </div>
            <div className="itemFrase">
               <div className="img-frase">
                  <img src={ImgJobs} alt="" />
               </div>
               <div className="content-frase">
                  <p>Design is the soul of everything created by man.</p>
                  <span>@Steve Jobs</span>
               </div>
            </div>
            <div className="itemFrase">
               <div className="img-frase">
                  <img src={ImgEdison} alt="" />
               </div>
               <div className="content-frase">
                  <p>
                     Just because something didn't turn out the way you wanted
                     it to doesn't mean it's useless.
                  </p>
                  <span>@Thomas Edison</span>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Frases;
