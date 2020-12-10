import React from 'react';
import 'use-slider/lib/slider.min.css';

interface CardI {
   img: string;
   title: string;
}

function Card(props: CardI) {
   const { img, title } = props;
   return (
      <div className="card">
         <div className="img-card">
            <img src={`/${img}`} alt="" />
         </div>
         <a
            href="https://shoping-sigma.vercel.app/"
            className="link-item-project"
         >
            <h2>{title}</h2>
         </a>
      </div>
   );
}

export default Card;
