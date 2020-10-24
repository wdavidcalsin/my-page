import {
   faDev,
   faGithub,
   faLinkedin,
   faMedium,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Follow } from 'react-twitter-widgets';
import useSlider from 'use-slider';
import Img1 from '../../img/Frame-1.png';

function Section() {
   const { ref } = useSlider({ autoPlay: true, loop: true });

   return (
      <section>
         <div className="container fx fx-rnw fx-aic">
            <div className="presentation  ">
               <div>
                  <span role="img" aria-label="👋">
                     👋
                  </span>
                  <h1>Hey, I`m Willian David Calsin</h1>
                  <p>
                     I`m a frontend designer, freelance developer, code teacher,
                     book author and open source activi st.
                  </p>
                  <div className="presentationIcons">
                     <div>
                        <Follow username="wdavidcalsin" />
                        <a href="#">
                           <FontAwesomeIcon
                              className="github"
                              icon={faGithub}
                           />
                        </a>
                        <a href="#">
                           <FontAwesomeIcon
                              className="twitter"
                              icon={faTwitter}
                           />
                        </a>
                        <a href="#">
                           <FontAwesomeIcon
                              className="medium"
                              icon={faMedium}
                           />
                        </a>
                        <a href="#">
                           <FontAwesomeIcon className="dev" icon={faDev} />
                        </a>
                        <a href="#">
                           <FontAwesomeIcon
                              className="linkedin"
                              icon={faLinkedin}
                           />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div className="video">
               {/* <video muted loop autoPlay>
                  <source src="https://jgthms.com/static/css-in-44-minutes-1216-6485e8900f47f0bcb096c3dc756f7917.mp4" />
               </video> */}
               <div ref={ref as any}>
                  <img src={Img1} alt="" />
                  <img src={Img1} alt="" />
                  <img src={Img1} alt="" />
                  <img src={Img1} alt="" />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Section;
