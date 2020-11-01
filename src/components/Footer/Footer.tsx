import React from 'react';
// import { Timeline, Tweet, Follow } from 'react-twitter-widgets';
import 'use-slider/lib/slider.min.css';

function Footer() {
   return (
      <footer>
         <div className="fo-l">
            <p>&copy; WDavid Calsin</p>
         </div>
         <div className="fo-r">
            <a href="/">Terms</a>
            <a href="/">Help</a>
            <a href="/">Contacts</a>
         </div>
      </footer>
   );
}

export default Footer;
