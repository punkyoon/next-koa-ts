import * as React from 'react';
import styled from 'styled-components';

const About: React.FunctionComponent = () => {
  return (
    <Base>
      <Img src="/static/snorlax.png" />
      <Intro>Snorlax!</Intro>
    </Base>
  );
};

const Base = styled.div``;
const Img = styled.img``;
const Intro = styled.div``;

export default About;
