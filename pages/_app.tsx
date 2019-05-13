import * as React from 'react';
import App, { Container } from 'next/app';
import { RouterProps } from 'next/router';
import { Provider, useStaticRendering } from 'mobx-react';

import { isServer, RootStore, getOrCreateStore } from '../stores';

interface Props {
  Component: React.ComponentType;
  pageProps: any;
  initialStoreState: RootStore;
  router: RouterProps<any>;
}

useStaticRendering(isServer);

class NextKoaApp extends App<Props> {
  private rootStore: RootStore;

  static async getInitialProps({ Component, ctx }: any) {
    ctx.rootStore = getOrCreateStore({});

    let pageProps = {};
    if (typeof Component.getInitialProps === 'function') pageProps = await Component.getInitialProps(ctx);
    return { pageProps, initialStoreState: ctx.rootStore };
  }

  constructor(props: Props) {
    super(props);
    this.rootStore = getOrCreateStore(this.props.initialStoreState);
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider rootStore={this.rootStore} {...this.rootStore}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default NextKoaApp;
