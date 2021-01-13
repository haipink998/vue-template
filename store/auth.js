import httpMethod from "~/services/httpMethod";
import mutationTypes from "../constants/mutationTypes";
import authServices from "../services/authServices";

/**
 * initial state
 */
const state = () => ({
  user: null
});

/**
 * initial getters
 */
const getters = {
  isAuthenticated: (state) =>
    state.user && state.user.token && state.user.token.length > 0,
  getIdOfUser: (state) => state.user && state.user.user_id
};

/**
 * initial actions
 */
const actions = {
  
  async login({ commit }, payload) {
    try {
      const { username, password } = payload || {};
      const response = await authServices.login({ username, password });
      const { token, email, user_id } = response?.data || {};
      console.log({ token ,email,user_id });

      //* Success
      httpMethod.setUserToLocalStorage({ token, email, user_id });
      httpMethod.attachTokenToHeader(token);
      commit(mutationTypes.AUTH.SET_USER, {
        token,
        email,
        user_id
      });
      return response.data;
    } catch (error) {
      //* Error
      console.log(error);
      return null;
    }
  },
  async logout({commit}) {
    try {
      httpMethod.clearUserLocalStorage();
      window.location.href = window.location.origin + '/login';
    } catch (error) {
      console.log(error) ;
      return null;
    }
  },
  async register({commit}, payload) {
    try {
      const { username,password,email} = payload || {};
      const res = await authServices.register({ username, password, email});
      console.log({res}, '123');
    } catch (error) {
      console.log(error);
    }
  },
}

/**
 * initial mutations
 */

const mutations = {
  [mutationTypes.AUTH.SET_USER](state, payload) {
    state.user = {
      token: payload.token,
      email: payload.email,
      user_id: payload.user_id
    };
  },
  [mutationTypes.AUTH.LOGOUT](state, payload){
    state.user = null
  }
};

export default {
  // namespaced: true,
  state,
  getters,
  actions,
  mutations,
};