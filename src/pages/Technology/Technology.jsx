import React from 'react';
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
import Image from "../../assets/images/technology/image-launch-vehicle-landscape.jpg";


const Technology = () => {
  return (

      <>
        <TechContainer>
          <Slogan>
            <NumberOfTheSlogan>03</NumberOfTheSlogan>
            Space launch 101
          </Slogan>
        </TechContainer>
        <TechImage src={Image} />
        <TechContainer>
          <TechTabGroup>
            <TechInput id="1" defaultChecked/>
            <TechLabel htmlFor="1">
              <TechLabelInner>
                1
              </TechLabelInner>
            </TechLabel>
            <TechInput id="2"/>
            <TechLabel htmlFor="2">
              <TechLabelInner>
                2
              </TechLabelInner>
            </TechLabel>
            <TechInput id="3"/>
            <TechLabel htmlFor="3">
              <TechLabelInner>
                3
              </TechLabelInner>
            </TechLabel>
          </TechTabGroup>
          <TechTerminology>The terminology ...</TechTerminology>
          <TechTitle>Launch vehicle</TechTitle>
          <TechDescription>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</TechDescription>
        </TechContainer>
      </>



  );
};

export default Technology;