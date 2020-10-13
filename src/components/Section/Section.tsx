import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faMedium,
  faDev,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  SectionFirst,
  SectionPresentation,
  SectionVideo,
  SectionRedes,
  SectionRedesLink,
} from "./Styled1";

function Section() {
  return (
    <SectionFirst>
      <div>
        <SectionPresentation>
          <div>
            <span>👋</span>
            <h1>Hey, I`m Willian David Calsin</h1>
            <p>
              I`m a frontend designer, freelance developer, code teacher, book
              author and open source activist.
            </p>
            <SectionRedes>
              <div>
                <SectionRedesLink
                  borderColor="rgba(81, 81, 81, 0.1)"
                  svgColor="black"
                  backgroundColorHpver="black"
                  href=""
                >
                  <FontAwesomeIcon icon={faGithub} />
                </SectionRedesLink>
                <SectionRedesLink
                  borderColor="rgba(81, 81, 81, 0.1)"
                  svgColor="rgb(3, 169, 244)"
                  backgroundColorHpver="rgb(3, 169, 244)"
                  href=""
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </SectionRedesLink>
                <SectionRedesLink
                  borderColor="rgba(81, 81, 81, 0.1)"
                  svgColor="black"
                  backgroundColorHpver="black"
                  href=""
                >
                  <FontAwesomeIcon icon={faMedium} />
                </SectionRedesLink>
                <SectionRedesLink
                  borderColor="rgba(81, 81, 81, 0.1)"
                  svgColor="black"
                  backgroundColorHpver="black"
                  href=""
                >
                  <FontAwesomeIcon icon={faDev} />
                </SectionRedesLink>
                <SectionRedesLink
                  borderColor="rgba(81, 81, 81, 0.1)"
                  svgColor="rgb(14, 115, 169)"
                  backgroundColorHpver="rgb(14, 115, 169)"
                  href=""
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </SectionRedesLink>
                {/* <a href="">
                                    <img src="https://www.flaticon.es/svg/static/icons/svg/2111/2111543.svg" alt=""/>
                                </a> */}
              </div>
            </SectionRedes>
          </div>
        </SectionPresentation>
        <SectionVideo>
          <video muted loop autoPlay>
            <source src="https://jgthms.com/static/css-in-44-minutes-1216-6485e8900f47f0bcb096c3dc756f7917.mp4" />
          </video>
        </SectionVideo>
      </div>
    </SectionFirst>
  );
}

export default Section;
