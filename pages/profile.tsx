import * as React from 'react';
import styled from 'styled-components';

const Profile: React.FunctionComponent = () => {
  return (
    <Base>
      <Intro>Snorlax is cute Pokemon</Intro>
    </Base>
  );
};

const Base = styled.div``;
const Intro = styled.div``;

export default Profile;
