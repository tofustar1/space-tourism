import React from 'react';
import { Container } from "../../styles/General";
import { HomeButton, HomeDescription, HomeTextInner, HomeTitle, HomeWrapper, Slogan } from "../../styles/Home";

const Home = () => {
  return (
      <Container>
        <HomeWrapper>
          <HomeTextInner>
            <Slogan>So, you want to travel to</Slogan>
            <HomeTitle>Space</HomeTitle>
            <HomeDescription>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and
              not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this
              world experience!</HomeDescription>
          </HomeTextInner>
          <HomeButton>Explore</HomeButton>
        </HomeWrapper>
      </Container>
  );
};

export default Home;