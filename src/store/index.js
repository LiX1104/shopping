import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    chuanzhi:[],
    // name:0
  },
  mutations: {
    setList(state,data){
      state.list=data
    },
    setChuanzhi(state,data){
      state.chuanzhi.push(data)
    }
  },
  actions: {
    async getList({commit}){
      let res = await axios.get('/data.json')
      console.log(res.data.data)
      commit('setList',res.data.data)
    },

  },
  modules: {
  }
})
