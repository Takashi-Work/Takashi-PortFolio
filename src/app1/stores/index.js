import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import {base_modal} from './dynamics/modals/basic_modal.js';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        base_modal: base_modal
    }
})
