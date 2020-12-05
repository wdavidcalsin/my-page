import { faDev, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
   const [showScroll, setShowScroll] = useState(false);

   const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
         setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
         setShowScroll(false);
      }
   };

   window.addEventListener('scroll', checkScrollTop);

   return (
      <header className="header">
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
               <a
                  href="https://twitter.com/wdavidcalsin"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  <FontAwesomeIcon className="twitter" icon={faTwitter} />
               </a>
               <a
                  href="https://github.com/wdavidcalsin"
                  target="_blank"
                  rel="noopener noreferrer"
               >
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
