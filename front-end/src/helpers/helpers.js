import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
    messageOptions: {
        timeout: 3000,
        pauseOnInteract: true
    }
});

const vm = new Vue();
const baseURL = 'http://localhost:3000/challenges/';

const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        console.error(error);
        vm.flash(`Error: ${error.response.data.message}`, 'error');
    });

export const api = {
    // User-related API calls
    login: handleError(async payload => {
        const res = await axios.post(baseURL + 'users/login', payload);
        return res.data;
    }),
    register: handleError(async payload => {
        const res = await axios.post(baseURL + 'users/register', payload);
        return res.data;
    }),
    getUser: handleError(async id => {
        const res = await axios.get(baseURL + 'users/' + id);
        return res.data;
    }),
    updateUser: handleError(async (id, payload) => {
        const res = await axios.put(baseURL + 'users/' + id, payload);
        return res.data;
    }),

    // Category-related API calls
    getCategories: handleError(async () => {
        const res = await axios.get(baseURL + 'waste-categories');
        return res.data;
    }),
    getCategory: handleError(async id => {
        const res = await axios.get(baseURL + 'waste-categories/' + id);
        return res.data;
    }),
    createCategory: handleError(async payload => {
        const res = await axios.post(baseURL + 'waste-categories', payload);
        return res.data;
    }),
    updateCategory: handleError(async (id, payload) => {
        const res = await axios.put(baseURL + 'waste-categories/' + id, payload);
        return res.data;
    }),
    deleteCategory: handleError(async id => {
        const res = await axios.delete(baseURL + 'waste-categories/' + id);
        return res.data;
    }),

    // Challenge-related API calls
    getChallenges: handleError(async () => {
        const res = await axios.get(baseURL + 'challenges');
        return res.data;
    }),
    getChallenge: handleError(async id => {
        const res = await axios.get(baseURL + 'challenges/' + id);
        return res.data;
    }),
    createChallenge: handleError(async payload => {
        const res = await axios.post(baseURL + 'challenges', payload);
        return res.data;
    }),
    updateChallenge: handleError(async (id, payload) => {
        const res = await axios.put(baseURL + 'challenges/' + id, payload);
        return res.data;
    }),
    deleteChallenge: handleError(async id => {
        const res = await axios.delete(baseURL + 'challenges/' + id);
        return res.data;
    }),

    // Item-related API calls
    getItems: handleError(async () => {
        const res = await axios.get(baseURL + 'waste-items');
        return res.data;
    }),
    getItem: handleError(async id => {
        const res = await axios.get(baseURL + 'waste-items/' + id);
        return res.data;
    }),
    createItem: handleError(async payload => {
        const res = await axios.post(baseURL + 'waste-items', payload);
        return res.data;
    }),
    updateItem: handleError(async (id, payload) => {
        const res = await axios.put(baseURL + 'waste-items/' + id, payload);
        return res.data;
    }),
    deleteItem: handleError(async id => {
        const res = await axios.delete(baseURL + 'waste-items/' + id);
        return res.data;
    }),

    // Other API calls
    getWasteManageData: handleError(async () => {
        const res = await axios.get(baseURL + 'waste-manage');
        return res.data;
    }),
    getMainPageData: handleError(async () => {
        const res = await axios.get(baseURL + 'main');
        return res.data;
    })
};