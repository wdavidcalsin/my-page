import styled from 'styled-components';

export const SectionFirst = styled.section`
   & > div {
   }
`;

export const SectionPresentation = styled.div`
   & > div {
      span {
      }

      h1 {
      }

      p {
      }
   }
`;

export const SectionRedes = styled.div`
   & > div {
   }
`;

interface sectionRedesLink {
   borderColor: string;
   backgroundColorHpver: string;
   svgColor: string;
}
export const SectionRedesLink = styled.a`
   border: 2px solid ${(props: sectionRedesLink) => props.borderColor};
   color: ${(props: sectionRedesLink) => props.svgColor};

   &:hover {
      background-color: ${(props: sectionRedesLink) =>
         props.backgroundColorHpver};
   }
   svg {
   }
   img {
   }
`;

export const SectionVideo = styled.div`
   video {
   }
`;
