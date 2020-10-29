import React, { FC } from 'react';
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
                  <div className="cuntry">
                     <span>Puno Peru</span>
                  </div>
               </div>
               <div className="contentMe">
                  <p>
                     Hola, soy Willian David, un autodidacta, diseñador de
                     JavaScript con pasión por el diseño de movimiento.
                     Actualmente vivo en Puno, Peru. Soy un geek absoluto y me
                     encanta hacer geeks en todo lo relacionado con Linux y
                     JavaScript.
                  </p>
                  <p>
                     Me enamoré por primera vez del diseño web hace 2 años.
                     Desde entonces he estado enganchado. Aunque mi enfoque por
                     ahora es fuertemente en el desarrollo web tanto en el
                     frontend como en el backend. Mi pila de desarrollo favorita
                     en este momento es React, Typescript, GrahpQL, Node,
                     MongoDB y Linux.
                  </p>
                  <p>
                     Los valores que tengo son la lealtad, la fiabilidad, la
                     autenticidad y ayudar a otros a alcanzar el éxito. Es por
                     eso que veo los proyectos hasta el final y por lo que creo
                     en no sólo crear un software hermoso, sino también fiable y
                     que refleje la marca del cliente y que sea fácil de usar de
                     manera que no distraiga la experiencia del usuario.
                  </p>
                  <p>
                     Ya sea creando servidores en Node, conectando a las bases
                     de datos de MongoDB o diseñando experiencias de usuario
                     únicas por dispositivo manteniendo una experiencia de marca
                     consistente, haré realidad tus ideas.
                  </p>
               </div>
            </div>
         </div>
      </LayoutIndex>
   );
};

export default PageMe;
