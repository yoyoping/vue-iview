let userInfo;
if (localStorage.userInfo) {
  userInfo = JSON.parse(localStorage.userInfo);
} else {
  userInfo = "";
}
const user = {
  state: {
    userInfo: userInfo,
    message: "点击我",
    count: 1
  },
  mutations: {
    SET_MSG: (state, res) => {
      state.message = res;
    },
    SET_COUNT: (state, res) => {
      state.count = res;
    },
    ADD_COUNT: state => {
      state.count += 1;
    },
    MINUS_COUNT: state => {
      state.count -= 1;
    },
    SET_USER: (state, res) => {
      state.userInfo = res;
    }
  },
  actions: {
    setmsg({ commit }, res) {
      commit("SET_MSG", res);
    },
    setcount({ commit }, res) {
      commit("SET_COUNT", res);
    },
    addCount({ commit }) {
      commit("ADD_COUNT");
    },
    minusCount({ commit }) {
      commit("MINUS_COUNT");
    }
  }
};
export default user;
