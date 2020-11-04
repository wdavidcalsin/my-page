import { faDev, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
   let [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      window.addEventListener('scroll', onScroll);

      return () => {
         window.removeEventListener('scroll', onScroll);
      };
   }, []);

   const onScroll = () => {
      if (window.scrollY > 20) {
         setScrolled(true);
      } else {
         setScrolled(false);
      }
   };

   return (
      <header
         className={clsx('header', {
            scrolled,
         })}
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
