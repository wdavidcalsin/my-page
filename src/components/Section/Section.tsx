import {
   faGithub,
   faLinkedin,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import { Follow } from 'react-twitter-widgets';
import useSlider from 'use-slider';
import Img1 from '../../img/sectionImgPresent.png';

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
                     I'm a front-end engineer and a full-stack developer and, I
                     love the Typescript language and as a library I like React,
                     to develop backend I use Nestjs, at the same time I'm a fan
                     of open source, I like to share what I learn.
                  </p>
                  <div className="presentationIcons">
                     <div>
                        {/* <Follow username="wdavidcalsin" /> */}
                        <a
                           href="https://github.com/wdavidcalsin"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon
                              className="github"
                              icon={faGithub}
                           />
                        </a>
                        <a
                           href="https://twitter.com/wdavidcalsin"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FontAwesomeIcon
                              className="twitter"
                              icon={faTwitter}
                           />
                        </a>
                        {/* <a href="/">
                           <FontAwesomeIcon
                              className="medium"
                              icon={faMedium}
                           />
                        </a> */}
                        {/* <a href="/">
                           <FontAwesomeIcon className="dev" icon={faDev} />
                        </a> */}
                        <a
                           href="https://www.linkedin.com/in/williandavidcalsin"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
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
