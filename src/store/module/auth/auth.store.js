import { AuthService } from "@/services";
const state = {};
const getters = {};
const mutations = {};
const actions = {
  register(state, payload) {
    return AuthService.register(payload);
  },
  async signin(state, payload) {
    try {
      const { data:res } = await AuthService.signin(payload);
      console.log("login ", res);
      return res;
    } catch (e) {
      console.log(e);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
