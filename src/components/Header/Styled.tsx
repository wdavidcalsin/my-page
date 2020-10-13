import styled from 'styled-components';

export const NavHeader = styled.nav`
   /* position: fixed; */
`;

export const Content = styled.div`
   display: felx;
`;

export const Logo = styled.div`
   a {
      img {
         width: 3rem;
      }
   }
`;

export const NavMenu = styled.div`
   .navRedesSociales {
      a {
         img {
            width: 2rem;
         }
      }
   }
`;

export const NavList = styled.div`
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   display: flex;
   font-weight: 400;
   flex-direction: row;
   font-family: 'Segoe ui';
   h1 {
      display: none;
   }
   /* left: 100%;  */

   @media (max-width: 450px) {
      h1 {
         display: block;
         font-weight: 700;
         color: #4a4a4a;
         font-size: 1.5rem;
         text-align: center;
      }
      border-right: 3px solid rgba(0, 0, 0, 0.02);
      width: 90%;
      background-color: white;
      position: absolute;
      flex-direction: column;
   }
`;

interface HoverLisProps {
   colorList: string;
}

export const LinkNavList = styled.a`
   text-decoration: none;
   font-size: 1.2rem;
   color: rgba(0, 0, 0, 0.7);

   svg {
      display: none;
   }

   @media (max-width: 450px) {
      svg {
         display: inline-block;
         width: 190rem;
         padding: 2px 20px;
         /* color: blue; */
      }
      span {
         color: black;
      }

      padding: 15px 5px;
      border-top: 2px solid rgba(0, 0, 0, 0.02);
      border-bottom: 2px solid rgba(0, 0, 0, 0.02);
      margin-bottom: -2px;
   }

   &:before {
      background-color: ${(props: HoverLisProps) => props.colorList};
   }

   &:hover:before {
   }

   &:hover {
   }
`;

export const NavRedes = styled.div`
   a {
   }
`;
