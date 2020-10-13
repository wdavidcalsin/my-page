import React from 'react';
import {
   faBars,
   faPodcast,
   faInbox,
   faMortarPestle,
   faBaby,
   faCamera,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faTwitter,
   faMedium,
   faDev,
   faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
   NavHeader,
   Content,
   Logo,
   NavMenu,
   NavRedes,
   NavList,
   LinkNavList,
} from './Styled1';

function Header() {
   return (
      <NavHeader>
         <Content>
            <Logo className="logo">
               <a href="#">
                  <img
                     src="https://www.flaticon.es/svg/static/icons/svg/3594/3594461.svg"
                     alt="Logo"
                  />
               </a>
            </Logo>
            <NavMenu className="navMenu">
               <NavList className="navList">
                  <h1>Menu</h1>
                  <LinkNavList colorList="orange" href="">
                     {' '}
                     <FontAwesomeIcon icon={faBars} />
                     <span>Home</span>
                  </LinkNavList>
                  <LinkNavList colorList="blue" href="">
                     <FontAwesomeIcon icon={faPodcast} />
                     <span>Portafolio</span>
                  </LinkNavList>
                  <LinkNavList colorList="black" href="">
                     <FontAwesomeIcon icon={faInbox} />
                     <span>Proyectos</span>
                  </LinkNavList>
                  <LinkNavList colorList="red" href="">
                     <FontAwesomeIcon icon={faMortarPestle} />
                     <span>About</span>
                  </LinkNavList>
                  <LinkNavList colorList="purple" href="">
                     <FontAwesomeIcon icon={faBaby} />
                     <span>Backers</span>
                  </LinkNavList>
                  <LinkNavList colorList="yellow" href="">
                     <FontAwesomeIcon icon={faCamera} />
                     <span>More</span>
                  </LinkNavList>
               </NavList>
               <NavRedes className="navRedesSociales">
                  <a href="">
                     <img
                        src="https://www.flaticon.es/svg/static/icons/svg/733/733609.svg"
                        alt=""
                     />
                  </a>
                  <a href="">
                     <img
                        src="https://www.flaticon.es/svg/static/icons/svg/733/733579.svg"
                        alt=""
                     />
                  </a>
                  <a href="">
                     <img
                        src="https://www.flaticon.es/svg/static/icons/svg/2111/2111543.svg"
                        alt=""
                     />
                  </a>
               </NavRedes>
               <FontAwesomeIcon icon={faBars} />
            </NavMenu>
         </Content>
      </NavHeader>
   );
}

export default Header;
