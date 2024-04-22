import React, { useState } from 'react';
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
import data from '../../data.json';

const Destination = () => {
  const [destination, setDestination] = useState(data.destinations[0]);

  const onClickHandler = (event) => {
    const selectedDestination = data.destinations.find(dest => dest.name === event.target.innerHTML);
    setDestination(selectedDestination);
  };

  return (
      <Container>
        <DWrapper>
          <DInner>
            <DSlogan>
              <NumberOfTheSlogan>01</NumberOfTheSlogan>
              Pick your destination
            </DSlogan>
            <DImage src={require(`../../${destination.image}`)}/>
          </DInner>
          <DInner>
            <DTabGroup>
              {
                data.destinations.map((dest, index) => (
                    <React.Fragment key={dest.name}>
                      <DInput
                          id={dest.name.toLowerCase()}
                          defaultChecked={!index}
                      />
                      <DLabel
                          htmlFor={dest.name.toLowerCase()}
                          onClick={(event) => onClickHandler(event)}
                      >
                        {dest.name}
                      </DLabel>
                    </React.Fragment>
                ))
              }
            </DTabGroup>
            <DTitle>{destination.name}</DTitle>
            <DDescription>{destination.description}</DDescription>
            <DInfoBlock>
              <DInfoElement>
                <DParameter>Avg. distance</DParameter>
                <DValue>{destination.distance}</DValue>
              </DInfoElement>
              <DInfoElement>
                <DParameter>Est. travel time</DParameter>
                <DValue>{destination.travel}</DValue>
              </DInfoElement>
            </DInfoBlock>
          </DInner>
        </DWrapper>
      </Container>
  );
};

export default Destination;