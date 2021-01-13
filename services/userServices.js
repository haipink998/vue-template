import httpMethod from "./httpMethod";
import apis from "../constants/apis";

class AuthServices {
  getUser({ id }) {
    return httpMethod.get(`${apis.USER_URL}${id}`)
  }
}

export default new AuthServices();