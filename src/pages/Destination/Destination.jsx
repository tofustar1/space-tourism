import React, { useState } from 'react';
import { Container, NumberOfTheSlogan, Slogan } from "../../styles/General";
import {
  DestDescription,
  DestImage,
  DestInfoBlock,
  DestInfoElement,
  DestInner,
  DestInput,
  DestLabel,
  DestParametr,
  DestTabGroup,
  DestTitle,
  DValue,
  DestWrapper
} from "../../styles/Destination";
import data from '../../data.json';

const Destination = () => {
  const [destination, setDestination] = useState(data.destinations[0]);

  const onClickHandler = event => {
    const selectedDestination = data.destinations.find(dest => dest.name === event.target.innerHTML);
    setDestination(selectedDestination);
  };

  return (
      <Container>
        <DestWrapper>
          <DestInner>
            <Slogan>
              <NumberOfTheSlogan>01</NumberOfTheSlogan>
              Pick your destination
            </Slogan>
            <DestImage src={require(`../../${destination.image}`)}/>
          </DestInner>
          <DestInner>
            <DestTabGroup>
              {
                data.destinations.map((dest, index) => (
                    <React.Fragment key={dest.name}>
                      <DestInput
                          id={dest.name}
                          defaultChecked={!index}
                      />
                      <DestLabel
                          htmlFor={dest.name}
                          onClick={event => onClickHandler(event)}
                      >
                        {dest.name}
                      </DestLabel>
                    </React.Fragment>
                ))
              }
            </DestTabGroup>
            <DestTitle>{destination.name}</DestTitle>
            <DestDescription>{destination.description}</DestDescription>
            <DestInfoBlock>
              <DestInfoElement>
                <DestParametr>Avg. distance</DestParametr>
                <DValue>{destination.distance}</DValue>
              </DestInfoElement>
              <DestInfoElement>
                <DestParametr>Est. travel time</DestParametr>
                <DValue>{destination.travel}</DValue>
              </DestInfoElement>
            </DestInfoBlock>
          </DestInner>
        </DestWrapper>
      </Container>
  );
};

export default Destination;