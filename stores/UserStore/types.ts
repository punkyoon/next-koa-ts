export const userInitialState = {
  isLogin: false,
  username: 'anonymous',
  loginTime: undefined
};

export interface UserInitialStateType {
  isLogin: boolean;
  username: string;
  loginTime?: number;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  loginTime: number;
  username: string;
}
