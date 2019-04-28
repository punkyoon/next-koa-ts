import React from 'react';
import styled from 'styled-components';

interface Props {
  statusCode?: number;
}

export default class Error extends React.Component<Props> {
  static getInitialProps({ res, err }: any) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <Base>
        {this.props.statusCode ? `An error ${this.props.statusCode} occurred on server` : 'An error occurred on client'}
      </Base>
    );
  }
}

const Base = styled.div``;
