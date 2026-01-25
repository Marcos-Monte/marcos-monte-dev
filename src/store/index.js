import { createStore } from "vuex";
import globals from "./modules/globals";

export default createStore({
    modules: {
        globals,
    }
})