import httpMethod from "./httpMethod";
import apis from "../constants/apis";

class AuthServices {
  login({ username, password }) {
    return httpMethod.post(apis.LOGIN_URL, { username, password });
  }
  register({ username, password, email}) {
    return httpMethod.post(apis.USER_URL, {username, password, email})
  }
}

export default new AuthServices();