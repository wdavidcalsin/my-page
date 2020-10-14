import { faDev, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBars, faInbox, faPodcast } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './../../styles/components/Header.scss';

function Header() {
   return (
      <nav>
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
                     <a href="/">
                        <FontAwesomeIcon icon={faBars} />
                        <span>Home</span>
                     </a>
                  </li>
                  <li>
                     <a href="/">
                        <FontAwesomeIcon icon={faPodcast} />
                        <span>Me</span>
                     </a>
                  </li>

                  <li>
                     <a href="/">
                        <FontAwesomeIcon icon={faInbox} />
                        <span>Projects</span>
                     </a>
                  </li>
               </ul>
            </div>
            <div className="actions">
               <a href="/">
                  <FontAwesomeIcon icon={faTwitter} />
               </a>
               <a href="/">
                  <FontAwesomeIcon icon={faGithub} />
               </a>
               <a href="/">
                  <FontAwesomeIcon icon={faDev} />
               </a>
            </div>
         </div>
      </nav>
   );
}

export default Header;
