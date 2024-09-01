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
// Use for user and challenge
const baseURL1 = 'http://localhost:3002/';
// Use for category and item
const baseURL2 = 'http://localhost:3003/';


const handleError = fn => (...params) =>
    fn(...params).catch(error => {
        console.error(error);
        vm.flash(`Error: ${error.response.data.message}`, 'error');
    });

export const api = {
    // User-related API calls
    login: handleError(async payload => {
        const res = await axios.post(baseURL1 + 'users/login', payload);
        return res.data;
    }),
    register: handleError(async payload => {
        const res = await axios.post(baseURL1 + 'users/register', payload);
        return res.data;
    }),
    getUser: handleError(async id => {
        const res = await axios.get(baseURL1 + 'users/' + id);
        return res.data;
    }),
    updateUser: handleError(async (id, payload) => {
        const res = await axios.put(baseURL1 + 'users/' + id, payload);
        return res.data;
    }),
    deleteUser: handleError(async id => {
        const res = await axios.delete(baseURL1 + id);
        return res.data;
    }),

    // Challenge-related API calls
    getChallenges: handleError(async () => {
        const res = await axios.get(baseURL1 + 'challenges');
        return res.data;
    }),
    getChallenge: handleError(async id => {
        const res = await axios.get(baseURL1 + 'challenges/' + id);
        return res.data;
    }),
    createChallenge: handleError(async payload => {
        const res = await axios.post(baseURL1 + 'challenges', payload);
        return res.data;
    }),
    updateChallenge: handleError(async (id, payload) => {
        const res = await axios.put(baseURL1 + 'challenges/' + id, payload);
        return res.data;
    }),
    deleteChallenge: handleError(async id => {
        const res = await axios.delete(baseURL1 + 'challenges/' + id);
        return res.data;
    }),

    // Category-related API calls
    getCategories: handleError(async () => {
        const res = await axios.get(baseURL2 + 'waste-categories');
        return res.data;
    }),
    getCategory: handleError(async id => {
        const res = await axios.get(  + 'waste-categories/' + id);
        return res.data;
    }),
    createCategory: handleError(async payload => {
        const res = await axios.post(baseURL2 + 'waste-categories', payload);
        return res.data;
    }),
    updateCategory: handleError(async (id, payload) => {
        const res = await axios.put(baseURL2 + 'waste-categories/' + id, payload);
        return res.data;
    }),
    deleteCategory: handleError(async id => {
        const res = await axios.delete(baseURL2 + 'waste-categories/' + id);
        return res.data;
    }),

    

    // Item-related API calls
    getItems: handleError(async () => {
        const res = await axios.get(baseURL2 + 'waste-items');
        return res.data;
    }),
    getItem: handleError(async id => {
        const res = await axios.get(baseURL2 + 'waste-items/' + id);
        return res.data;
    }),
    createItem: handleError(async payload => {
        const res = await axios.post(baseURL2 + 'waste-items', payload);
        return res.data;
    }),
    updateItem: handleError(async (id, payload) => {
        const res = await axios.put(baseURL2 + 'waste-items/' + id, payload);
        return res.data;
    }),
    deleteItem: handleError(async id => {
        const res = await axios.delete(baseURL2 + 'waste-items/' + id);
        return res.data;
    }),

};