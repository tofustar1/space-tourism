import React, { useState } from 'react';
import { NumberOfTheSlogan, Slogan } from "../../styles/General";
import {
  TechContainer,
  TechDescription,
  TechImage,
  TechInput,
  TechLabel, TechLabelInner,
  TechTabGroup,
  TechTerminology,
  TechTitle
} from "../../styles/Technology";
import data from "../../data.json";


const Technology = () => {
  const [technology, setTechnology] = useState(data.technology[0]);
  const onClickHandler = index => setTechnology(data.technology[index]);

  return (
      <>
        <TechContainer>
          <Slogan>
            <NumberOfTheSlogan>03</NumberOfTheSlogan>
            Space launch 101
          </Slogan>
        </TechContainer>
        <TechImage src={require(`../../${technology.images.landscape}`)} />
        <TechContainer>
          <TechTabGroup>
            {
              data.technology.map((tech, index) => (
                  <React.Fragment key={tech.name}>
                    <TechInput
                      id={tech.name}
                      defaultChecked={!index}
                    />
                    <TechLabel
                      htmlFor={tech.name}
                      onClick={() => onClickHandler(index)}
                    >
                      <TechLabelInner>{index + 1}</TechLabelInner>
                    </TechLabel>
                  </React.Fragment>
              ))
            }
          </TechTabGroup>
          <TechTerminology>The terminology ...</TechTerminology>
          <TechTitle>{technology.name}</TechTitle>
          <TechDescription>{technology.description}</TechDescription>
        </TechContainer>
      </>
  );
};

export default Technology;