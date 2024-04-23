import React, { useState } from 'react';
import { Container, NumberOfTheSlogan, Slogan } from "../../styles/General";
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
import data from "../../data.json";

const Crew = () => {
  const [crew, setCrew] = useState(data.crew[0]);
  const onClickHandler = (index) => setCrew(data.crew[index]);

  return (
      <Container>
        <CrewInner>
          <Slogan>
            <NumberOfTheSlogan>02</NumberOfTheSlogan>
            Meet your crew
          </Slogan>
          <CrewImageWrapper>
            <CrewImage src={require(`../../${crew.image}`)}/>
          </CrewImageWrapper>
          <CrewPosition>{crew.role}</CrewPosition>
          <CrewName>{crew.name}</CrewName>
          <CrewDescription>{crew.bio}</CrewDescription>
          <CrewTabGroup>
            {
              data.crew.map((person, index) => (
                  <React.Fragment key={person.name}>
                    <CrewInput
                      id={person.name}
                      defaultChecked={!index}
                    />
                    <CrewLabel
                      htmlFor={person.name}
                      onClick={() => onClickHandler(index)}
                    />
                  </React.Fragment>
              ))
            }
          </CrewTabGroup>
        </CrewInner>
      </Container>
  );
};

export default Crew;