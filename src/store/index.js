import Vue from "vue";
import Vuex from "vuex";
import upload from './upload';
Vue.use(Vuex);


export default new Vuex.Store({
    strict: process.env.NODE_ENV !== "production",
    modules: {
        upload
    }
   
});