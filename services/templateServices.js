import httpMethod from "./httpMethod";
import apis from "../constants/apis";

class TemplateServices {
  getTemplate() {
    return httpMethod.get(`${apis.TEMPLATE_URL}`);
  }
}
export default new TemplateServices();