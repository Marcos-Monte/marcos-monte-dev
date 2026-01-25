export default {
    namespaced: true,

    state: {
        appStyle: false,
    },

    getters: {
        appStyle(state) {
            return state.appStyle;
        }
    },

    mutations: {
        SET_APP_STYLE(state) {
            state.appStyle = !state.appStyle;
        }
    },

    actions: {
        toggleAppStyle({ commit }) {
            commit('SET_APP_STYLE');
        }
    },
}