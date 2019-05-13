import { observable, action } from 'mobx';
import UserAPI from './api';
import { LoginResponse, UserInitialStateType } from './types';
import { AxiosResponse } from 'axios';

export class UserStore {
  private userAPI = new UserAPI();
  isRequestLogin: boolean;

  @observable username: string;
  @observable isLogin: boolean;
  @observable loginTime?: number;

  constructor(initialState: UserInitialStateType) {
    this.username = initialState.username;
    this.isLogin = initialState.isLogin;
    this.loginTime = initialState.loginTime;

    this.isRequestLogin = false;
  }

  @action
  requestLogin = async (username: string, password: string) => {
    this.isRequestLogin = true;

    try {
      const response: AxiosResponse<LoginResponse> = await this.userAPI.login({ username, password });

      this.username = response.data.username;
      this.loginTime = response.data.loginTime;
      this.isLogin = true;
    } catch (e) {
      this.isLogin = false;
    }

    this.isRequestLogin = false;
  };
}
