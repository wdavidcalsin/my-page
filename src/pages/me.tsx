import React, { FC } from 'react';
import Skils from '../components/Skils/Index';
import ImgProfile from '../img/profile.jpg';
import LayoutIndex from '../layouts';

const PageMe: FC = () => {
   return (
      <LayoutIndex>
         <div className="AboutMe">
            <div className="container fx fx-cc fx-dc">
               <div className="perfilMe fx fx-dc">
                  <img src={ImgProfile} alt="" />
                  <h2>Willian David</h2>
                  <div className="nickName">
                     <span>@wdavidcalsin</span>
                  </div>
                  <div className="country">
                     <span>Puno Peru</span>
                     <svg viewBox="0 0 512 342">
                        <path d="M512 0H0V341.326H512V0Z" fill="#F0F0F0"></path>
                        <path
                           d="M170.663 0H0V341.337H170.663V0Z"
                           fill="#D80027"
                        ></path>
                        <path
                           d="M512 0H341.337V341.337H512V0Z"
                           fill="#D80027"
                        ></path>
                     </svg>
                  </div>
               </div>
               <div className="contentMe">
                  <p>
                     Hello, I am William David, a self-taught and freelancer,
                     Fron-end engenier with JavaScript and Typesctipt, with a
                     passion for movement. I currently live in Puno, Peru. I am
                     a geek absolute and I love geeking out on everything
                     related with Linux and Typescript.
                  </p>
                  <p>
                     I first fell in love with web design a year and a half ago.
                     I've been hooked ever since. Although my approach to is now
                     heavily involved in the development of the website both in
                     the in the front as well as in the back. My favorite
                     development pile at this time is React, Typescript,
                     GrahpQL, Node, Nestjs, MongoDB, MySql and Linux.
                  </p>
                  <p>
                     The values I have are loyalty, reliability, humility,
                     sicerity, the authenticity. That's why I do many projects
                     and that's why that I believe not only in creating
                     beautiful software, but also reliable and reflecting the
                     customer's brand and easy to use in a way that does not
                     distract from user.
                  </p>
                  <p>
                     I also like the backend that creates servers at Node,
                     connecting to MongoDB databases or designing unique user
                     experiences per device while maintaining a consistent brand
                     experience.
                  </p>
               </div>
               <Skils />
            </div>
         </div>
      </LayoutIndex>
   );
};

export default PageMe;
