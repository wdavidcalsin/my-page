import styled from 'styled-components';

export const SectionFirst = styled.section`
   width: 100%;

   & > div {
      /* background-color:  orange; */
      margin: auto;
      width: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
      max-width: 100%;
   }
`;

export const SectionPresentation = styled.div`
   flex: 1;
   /* background-color: red; */
   width: 100%;
   & > div {
      /* background: blue; */
      margin: auto;
      position: relative;
      span {
         position: absolute;
         font-size: 2.5rem;
         top: -0rem;
         left: -3.5rem;
      }

      h1 {
         font-weight: 500;
         font-size: 2.5rem;
         font-family: 'Sansita Swashed', cursive;
         color: rgb(71, 72, 84);
         margin: 0;
      }

      p {
         color: rgb(71, 72, 84);
         font-size: 2.1rem;
         font-family: 'Noto Sans JP', sans-serif;
      }
   }
`;

export const SectionRedes = styled.div`
   /* background:orange; */
   & > div {
      /* background-colors:red; */
      display: flex;
      align-content: center;
      flex-flow: row wrap;
   }
`;

interface sectionRedesLink {
   borderColor: string;
   backgroundColorHpver: string;
   svgColor: string;
}
export const SectionRedesLink = styled.a`
   text-align: center;
   margin: 0px -2px 15px 0px;
   border: 2px solid ${(props: sectionRedesLink) => props.borderColor};
   padding: 6px 30px;
   transition: all 0.1s;
   color: ${(props: sectionRedesLink) => props.svgColor};

   &:hover {
      background-color: ${(props: sectionRedesLink) =>
         props.backgroundColorHpver};
      color: white;
   }
   svg {
      font-size: 30px;
   }
   img {
      width: 2rem;
   }
`;

export const SectionVideo = styled.div`
   flex: 1;
   /* background-color:skyblue; */
   video {
      pointer-events: none;
      border-radius: 10px;
      display: block;
      height: auto;
      width: 450px;
      max-width: 500px;
      margin: auto;
   }
`;
