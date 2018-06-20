const app = {
  state: {
    tags: localStorage.tags, // 打开的标签页
    isKeep: true, // 是否缓存
    messageCount: 0, // 新消息
    count: 0,
    type: '1'
    // tagChange: '', // 是否增加了一个tag标签
    // moreTag: localStorage.moreTag // 超出的tag标签数据
  },
  mutations: {
    SET_COUNT: (state, res) => {
      state.count = res
    },
    ADD_TAG: (state, res) => {
      state.tags.push(res)
    },
    DEL_TAG: (state, res) => {
      state.tags.splice(res, 1)
    },
    TAGS: (state, res) => {
      state.tags = res
      localStorage.tags = res
    },
    SET_KEEP: (state, res) => {
      state.isKeep = res
    },
    SET_MESSAGECOUNT (state, count) {
      state.messageCount = count
    }
    // SET_MORETAG (state, res) {
    //   state.moreTag = res
    //   localStorage.moreTag = res
    // },
    // SET_TAGCHANGE (state, res) {
    //   state.tagChange = res
    // }
  },
  actions: {
    setcount ({ commit }, res) {
      commit('SET_COUNT', res)
    }
  }
}
export default app
