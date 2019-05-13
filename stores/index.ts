import { UserStore } from './UserStore';
import { userInitialState } from './UserStore/types';

const __NEXT_MOBX_STORE__ = '__NEXT_MOBX_STORE__';

export const isServer = typeof window === 'undefined';
export const rootInitialState = { userStore: userInitialState };

export class RootStore {
  userStore: UserStore;

  constructor(initialState: any) {
    initialState = { ...rootInitialState, ...initialState };
    this.userStore = new UserStore(initialState.userStore);
  }
}

export function initializeStore(initialState: any) {
  return new RootStore(initialState);
}

export function getOrCreateStore(initialState: any) {
  if (isServer) return initializeStore(initialState);
  if (!window[__NEXT_MOBX_STORE__]) window[__NEXT_MOBX_STORE__] = initializeStore(initialState);

  return window[__NEXT_MOBX_STORE__];
}
