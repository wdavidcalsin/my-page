import {
   faDev,
   faGithub,
   faLinkedin,
   faMedium,
   faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
// import {
//    SectionFirst,
//    SectionPresentation,
//    SectionRedes,
//    SectionRedesLink,
//    SectionVideo,
// } from './Styled1';

function Section() {
   return (
      <section>
         <div>
            <div>
               <div>
                  <span role="img" aria-label="👋">
                     👋
                  </span>
                  <h1>Hey, I`m Willian David Calsin</h1>
                  <p>
                     I`m a frontend designer, freelance developer, code teacher,
                     book author and open source activist.
                  </p>
                  <div>
                     <div>
                        <a>
                           <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a>
                           <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a>
                           <FontAwesomeIcon icon={faMedium} />
                        </a>
                        <a>
                           <FontAwesomeIcon icon={faDev} />
                        </a>
                        <a>
                           <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
            <div>
               <video muted loop autoPlay>
                  <source src="https://jgthms.com/static/css-in-44-minutes-1216-6485e8900f47f0bcb096c3dc756f7917.mp4" />
               </video>
            </div>
         </div>
      </section>
   );
}

export default Section;
