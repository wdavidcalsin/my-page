import {
   faBars,
   faInbox,
   faMortarPestle,
   faPodcast,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavHeader } from './elements';

function Header() {
   return (
      <NavHeader>
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
                  <FontAwesomeIcon icon={faMortarPestle} />
               </a>
            </div>
         </div>
      </NavHeader>
   );
}

export default Header;
