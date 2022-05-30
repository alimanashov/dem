import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)

export default new Vuex.Store({
    mutations: {
        setToken(state, token) {
            state.access_token = token.access_token
            state.refresh_token = token.refresh_token
        },
        setUser(state, user) {
            state.user = user
        },
        setLoggedIn(state, loggedIn) {
            state.loggedIn = loggedIn
        }
    },
    state: {
        user: null,
        access_token: null,
        refresh_token: null
    },
    getters: {
        token(state) {
            return {"access_token": state.access_token, "refresh_token": state.refresh_token}
        }
    },
    actions: {
        login({commit, state}, {user, token}) {
            commit('setUser', user);
            commit('setToken', token);
        },
        logout({commit, state}) {
            commit('setUser', null);
            commit('setToken', null);
        }
    }
})