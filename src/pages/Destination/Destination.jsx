import React from 'react';
import {Container, NumberOfTheSlogan, Slogan} from "../../styles/General";
import {
  DestinationDescription, DestinationImage, DestinationInput, DestinationLabel,
  DestinationParameter, DestinationTabGroup,
  DestinationTitle,
  DestinationValue,
  DestinationWrapper
} from "../../styles/Destination";
import ImgMoon from '../../assets/images/destination/image-moon.webp';

const Destination = () => {
  return (
      <Container>
        <DestinationWrapper>
          <Slogan>
            <NumberOfTheSlogan>01</NumberOfTheSlogan>
            Pick your destination
          </Slogan>
          <DestinationImage src={ImgMoon}/>
          <DestinationTabGroup>
            <DestinationLabel htmlFor="moon">Moon</DestinationLabel>
            <DestinationInput id="moon"/>
            <DestinationLabel htmlFor="mars">Mars</DestinationLabel>
            <DestinationInput id="mars"/>
            <DestinationLabel htmlFor="europa">Europa</DestinationLabel>
            <DestinationInput id="europa"/>
            <DestinationLabel htmlFor="titan">Titan</DestinationLabel>
            <DestinationInput id="titan"/>
          </DestinationTabGroup>
          <DestinationTitle>Moon</DestinationTitle>
          <DestinationDescription>See our planet as you’ve never seen it before. A perfect relaxing trip away to help
            regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2
            and Apollo 11 landing sites.</DestinationDescription>
          <DestinationParameter>Avg. distance</DestinationParameter>
          <DestinationValue>384,400 km</DestinationValue>
          <DestinationParameter>Est. travel time</DestinationParameter>
          <DestinationValue>3 days</DestinationValue>
        </DestinationWrapper>
      </Container>
  );
};

export default Destination;