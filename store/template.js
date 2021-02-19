import mutationTypes from "../constants/mutationTypes";
import templateServices from "~/services/templateServices";

const state = () => ({
  templateList: null
});

const getters = {
  getTemplateList: state => state.templateList
}
const actions = {
  async getTemplate({ commit }) {
    try {
      const res = await templateServices.getTemplate();
      const { data } = res;
      commit(mutationTypes.TEMPLATE.GET_TEMPLATE, data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

const mutations = {
  [mutationTypes.TEMPLATE.GET_TEMPLATE](state, payload){
    state.templateList = payload;
  }
}

export default {
  state,
  mutations,
  getters,
  actions,
}