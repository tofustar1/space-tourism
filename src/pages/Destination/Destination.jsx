import React from 'react';
import { Container, NumberOfTheSlogan } from "../../styles/General";
import {
  DDescription,
  DImage,
  DInfoBlock,
  DInfoElement,
  DInner,
  DInput,
  DLabel,
  DParameter,
  DSlogan,
  DTabGroup,
  DTitle,
  DValue,
  DWrapper
} from "../../styles/Destination";
import ImgMoon from '../../assets/images/destination/image-moon.webp';

const Destination = () => {
  return (
      <Container>
        <DWrapper>
          <DInner>
            <DSlogan>
              <NumberOfTheSlogan>01</NumberOfTheSlogan>
              Pick your destination
            </DSlogan>
            <DImage src={ImgMoon}/>
          </DInner>
          <DInner>
            <DTabGroup>
              <DInput defaultChecked id="moon"/>
              <DLabel htmlFor="moon">Moon</DLabel>
              <DInput id="mars"/>
              <DLabel htmlFor="mars">Mars</DLabel>
              <DInput id="europa"/>
              <DLabel htmlFor="europa">Europa</DLabel>
              <DInput id="titan"/>
              <DLabel htmlFor="titan">Titan</DLabel>
            </DTabGroup>
            <DTitle>Moon</DTitle>
            <DDescription>See our planet as you’ve never seen it before. A perfect relaxing trip away to help
              regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.</DDescription>
            <DInfoBlock>
              <DInfoElement>
                <DParameter>Avg. distance</DParameter>
                <DValue>384,400 km</DValue>
              </DInfoElement>
              <DInfoElement>
                <DParameter>Est. travel time</DParameter>
                <DValue>3 days</DValue>
              </DInfoElement>
            </DInfoBlock>
          </DInner>
        </DWrapper>
      </Container>
  );
};

export default Destination;