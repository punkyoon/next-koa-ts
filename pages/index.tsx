import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Index: React.FunctionComponent = () => {
  return (
    <Base>
      <Item>
        <Link href="/about" as="/about">
          <A>About</A>
        </Link>
      </Item>
      <Item>
        <Link href="/profile" as="/profile">
          <A>Profile</A>
        </Link>
      </Item>
    </Base>
  );
};

const Base = styled.ul``;
const Item = styled.li``;
const A = styled.a``;

export default Index;
