import apis from "../constants/apis";
import httpMethod from "./httpMethod";

class DiaryServices {
  getDiary() {
    return httpMethod.get(`${apis.DIARY_URL}`);
  }

  getDiarySon({ id }) {
    return httpMethod.get(`${apis.DIARY_URL}?children=${id}`);
  }
  readDiary({ id } ) {
    return httpMethod.get(`${apis.DIARY_URL}${id}`, { id })
  }
  addAction(action, start_time, user, actual_date) {
    return httpMethod.post(apis.DIARY_URL, { action, start_time, user, actual_date });
  }
  endAction({ id, start_time, action, end_time }) {
    return httpMethod.put(`${apis.DIARY_URL}${id}`, {
      id,
      start_time,
      action,
      end_time,
    });
  }
  updateAction(id,start_time,end_time,add_field,add_field_right,note,user) {
    return httpMethod.patch(`${apis.DIARY_URL}${id}`, {
      id,
      start_time,
      end_time,
      add_field,
      add_field_right,
      note,
      user
    });
  }
}
export default new DiaryServices();
