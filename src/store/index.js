// 1.Dependency
import { createStore } from "vuex";

// 2.Store
const store = {
    state: {
        deepBerry: {},
        type: "company",
    },
    mutations: {
        SETDEEPBERRY(state, obj) {
            state.deepBerry = obj;
        },
        CHANGETYPE(state, val) {
            state.type = val;
        },
    },
    getters: {},
    actions: {},
};

export default createStore(store);
