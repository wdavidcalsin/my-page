import { faDev, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
   let [state, setState] = useState(0);

   const handleAnimation = () => {
      let header = document.querySelector('.header') as HTMLElement;

      setState(document.documentElement.scrollTop);

      state = document.documentElement.scrollTop;

      if (state > 60) {
         header.style.fontSize = '14px';
         header.style.boxShadow = '0 0 30px -7px #eeeeee';
      } else {
         header.style.fontSize = '16px';
         header.style.boxShadow = 'none';
      }
   };

   return (
      <header
         {...(window.onscroll = () => handleAnimation())}
         className="header"
      >
         <div className="container fx fx-rnw fx-jcsb fx-aic">
            <div className="brand">
               <a href="/">
                  <img
                     src="https://www.flaticon.es/svg/static/icons/svg/3594/3594461.svg"
                     alt="Logo"
                  />
               </a>
            </div>
            <div className="nav-menu fx fx-jcfe">
               <ul className="fx fx-aic">
                  <li>
                     <Link to="/">Home</Link>
                  </li>
                  <li>
                     <Link to="/me">Me</Link>
                  </li>

                  <li>
                     <a href="/" className="blue">
                        Projects
                     </a>
                  </li>
               </ul>
            </div>
            <div className="actions">
               <a href="/">
                  <FontAwesomeIcon className="twitter" icon={faTwitter} />
               </a>
               <a href="/">
                  <FontAwesomeIcon className="github" icon={faGithub} />
               </a>
               <a href="/">
                  <FontAwesomeIcon className="dev" icon={faDev} />
               </a>
            </div>
         </div>
      </header>
   );
}

export default Header;
