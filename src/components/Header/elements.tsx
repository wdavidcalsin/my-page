import styled from 'styled-components';

const NavHeader = styled.nav`
   box-shadow: 0 2px 0 0 #f5f5f5;

   .container {
      height: 90px;

      .brand {
         img {
            height: 50px;
         }
      }

      .nav-menu {
         flex: 1;
         a {
            padding: 8px;
         }
      }
   }
`;

export { NavHeader };
