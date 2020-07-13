import auth from "../../api/auth"
// eslint-disable-next-line
import blog from "../../api/blog"

export default {
  state: {
    user:null,
    isLogin:false,
  },
  getters:{

  },
  mutations: {
    setUser(state,payload){
      state.user=payload.user
    },
    setLogin(state,payload){
      state.isLogin=payload.isLogin
    }

  },
  actions: {
    login({commit},{username,password}){
      return auth.login({username,password})
        .then(res=>{
          commit('setUser',{user:res.data})
          commit('setLogin',{isLogin:true})
        })
    },
    // eslint-disable-next-line
    async register({commit},{username, password}) {
      // eslint-disable-next-line
      let res = await auth.register({username, password})
      commit('setUser',{user:res.data})
      commit('setLogin',{isLogin:true})
      return res.data
    },
    async logout({commit}){
      await auth.logout()
      commit('setUser',{user:null})
      commit('setLogin',{isLogin:false})
    },
    async checkLogin ({commit,state}){
      if(state.isLogin) return true
      let res=await auth.getInfo()
      if (!res.isLogin) return false
      commit('setUser',{user:res.data})
      return true
    }
  }

}