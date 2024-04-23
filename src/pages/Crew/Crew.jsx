import React from 'react';
import {Container, NumberOfTheSlogan, Slogan} from "../../styles/General";
import {
  CrewDescription,
  CrewImage,
  CrewImageWrapper,
  CrewInner,
  CrewInput,
  CrewLabel, CrewName,
  CrewPosition,
  CrewTabGroup
} from "../../styles/Crew";
import imgCrew from "../../assets/images/crew/image-anousheh-ansari.webp";

const Crew = () => {
  return (
      <Container>
        <CrewInner>
          <Slogan>
            <NumberOfTheSlogan>02</NumberOfTheSlogan>
            Meet your crew
          </Slogan>
          <CrewImageWrapper>
            <CrewImage src={imgCrew}/>
          </CrewImageWrapper>
          <CrewTabGroup>
            <CrewInput defaultChecked={true}/>
            <CrewLabel />
            <CrewInput/>
            <CrewLabel />
            <CrewInput />
            <CrewLabel />
            <CrewInput />
            <CrewLabel />
          </CrewTabGroup>
          <CrewPosition>Commander</CrewPosition>
          <CrewName>Dmitrii Belovodskii</CrewName>
          <CrewDescription>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</CrewDescription>
        </CrewInner>
      </Container>
  );
};

export default Crew;