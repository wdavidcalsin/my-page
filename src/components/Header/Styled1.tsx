import styled, { StyledFunction } from 'styled-components'

export const NavHeader = styled.nav`
    /* background-color: red; */
    color: #fff;
    box-shadow: 0 2px 0 0 #f5f5f5;
    padding: 1rem 0rem;
`;

export const Content = styled.div`
    /* background-color:orange; */
    /* align-items: stretch; */
    display: flex;
    align-items:center;
    justify-content:center;
    min-height: 3.25rem;
    width: 70% ;
    max-width: 100%;
    margin: auto;
`;


export const Logo = styled.div`
    align-items: stretch;
    display: flex;
    flex-shrink: 0;
    min-height: 3.25rem;
    a{
        align-items: center;
        justify-content: center;
        display: flex;
        padding: 0 .75rem;
        img{
            /* height:auto; */
            max-width: 100%;
            width: 3rem;
            color: #4a4a4a; 
            line-height: 1.5;
        }
    }
`;

export const NavMenu = styled.div`
    /* margin-right: -.75rem; */
    display: flex;
    /* align-items: stretch; */
    flex-grow: 1;   
    /* flex-shrink: 0; */
    background-color:red;
    justify-content:flex-end;
    .navRedesSociales{
        a{
            img{
                width: 1.5rem;
            }
        }
    } 
`;


export const NavList = styled.div`
    display: flex;
    /* align-items: flex-end;
    align-content: flex-end;
    justify-content: flex-end; */
    background-color: orange;
    /* width: 100%; */
    /* flex-flow: column wrap; */
    @media (max-width: 768px) {
        display: none;
    }
   
`;

interface HoverLisProps {
    colorList: string;
}

export const LinkNavList = styled.a`
        /* border-radius: 5px; */
        cursor: pointer;
        align-items: center;
        text-decoration: none;
        line-height: 1.5;
        padding: .5rem .3rem;
        font-style: inherit;
        font-weight: inherit;

        color:#351435;
        margin: 0 15px;
        font-size:20px; 
        position: relative;
        /* background-color:#fff; */
        z-index:2;
        overflow:hidden;
        transition: all 1s;  

        &:before {
            content:"";
            position: absolute;
            left: 0;
            bottom: 0;
            height: 3px;
            width: 100%;
            z-index:-1;
            background-color: ${(props: HoverLisProps) => props.colorList};
            /* background-color:black; */
            transform:translateX(-100%);
            transition: all 1s;
        }

        &:hover:before {
            transform:translateX(0);
        }

        &:Hover{
            /* color: #fff; */
            /* background-color: rgb(91, 92, 91, 0.05); */
        }
`;

export const NavRedes = styled.div`
  /* align-items: center; */
  display:flex;  
  /* justify-content:flex-end; */
  /* margin-left:auto; */

  a{
      border-radius: 4px;
      cursor: pointer;
      text-decoration: none;
      line-height: 1.5;
      padding: .5rem .75rem;
  }
`;