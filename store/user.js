import httpMethod from "~/services/httpMethod";
import userServices from "~/services/userServices";
import mutationTypes from "../constants/mutationTypes";
import authServices from "../services/authServices";

/**
 * initial state
 */
const state = () => ({
  userInfo: null
});

/**
 * initial getters
 */
const getters = {
  getUserInfo: state => state.userInfo
};

/**
 * initial actions
 */
const actions = {
  async getUser({ commit }, payload) {
    try {
      const response = await userServices.getUser({ id: payload.id });
      const { data } = response;
      commit(mutationTypes.USER.SET_USER, data)
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

/**
 * initial mutations
 */

const mutations = {
  [mutationTypes.USER.SET_USER](state, payload) {
    state.userInfo = payload;
  },

};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};