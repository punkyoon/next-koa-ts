import axios from 'axios';
import { LoginRequest } from './types';

class UserAPI {
  login = (loginRequest: LoginRequest) => {
    return axios.post('http://localhost:3000/login', { ...loginRequest });
  };
}
export default UserAPI;
