import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

// Configure Vue to use flash messages
Vue.use(VueFlashMessage, {
    messageOptions: {
        timeout: 3000,
        pauseOnInteract: true,
    }
});

const baseURL = 'http://localhost:3000';

// Utility function to handle errors in API calls
const handleError = fn => async (...params) => {
    try {
        return await fn(...params);
    } catch (error) {
        console.log(error); // Log error for debugging
        Vue.prototype.$flashMessage.error({
            message: 'An error occurred while processing your request.',
        });
    }
};

export const api = {
    // Waste Category APIs
    fetchCategories: handleError(async () => {
        const res = await axios.get(`${baseURL}/waste-categories`);
        return res.data;
    }),
    fetchCategoryById: handleError(async id => {
        const res = await axios.get(`${baseURL}/waste-categories/${id}`);
        return res.data;
    }),
    createCategory: handleError(async category => {
        const res = await axios.post(`${baseURL}/waste-categories`, category);
        return res.data;
    }),
    updateCategory: handleError(async (id, category) => {
        const res = await axios.put(`${baseURL}/waste-categories/${id}`, category);
        return res.data;
    }),
    deleteCategory: handleError(async id => {
        const res = await axios.delete(`${baseURL}/waste-categories/${id}`);
        return res.data;
    }),

    // Challenge APIs
    fetchChallenges: handleError(async () => {
        const res = await axios.get(`${baseURL}/challenges`);
        return res.data;
    }),
    fetchChallengeById: handleError(async id => {
        const res = await axios.get(`${baseURL}/challenges/${id}`);
        return res.data;
    }),
    createChallenge: handleError(async challenge => {
        const res = await axios.post(`${baseURL}/challenges`, challenge);
        return res.data;
    }),
    updateChallenge: handleError(async (id, challenge) => {
        const res = await axios.put(`${baseURL}/challenges/${id}`, challenge);
        return res.data;
    }),
    deleteChallenge: handleError(async id => {
        const res = await axios.delete(`${baseURL}/challenges/${id}`);
        return res.data;
    }),

    // User APIs
    fetchUsers: handleError(async () => {
        const res = await axios.get(`${baseURL}/users`);
        return res.data;
    }),
    fetchUserById: handleError(async id => {
        const res = await axios.get(`${baseURL}/users/${id}`);
        return res.data;
    }),
    createUser: handleError(async user => {
        const res = await axios.post(`${baseURL}/users`, user);
        return res.data;
    }),
    updateUser: handleError(async (id, user) => {
        const res = await axios.put(`${baseURL}/users/${id}`, user);
        return res.data;
    }),
    deleteUser: handleError(async id => {
        const res = await axios.delete(`${baseURL}/users/${id}`);
        return res.data;
    }),

    // Item Management APIs
    fetchItems: handleError(async () => {
        const res = await axios.get(`${baseURL}/items`);
        return res.data;
    }),
    fetchItemById: handleError(async id => {
        const res = await axios.get(`${baseURL}/items/${id}`);
        return res.data;
    }),
    createItem: handleError(async item => {
        const res = await axios.post(`${baseURL}/items`, item);
        return res.data;
    }),
    updateItem: handleError(async (id, item) => {
        const res = await axios.put(`${baseURL}/items/${id}`, item);
        return res.data;
    }),
    deleteItem: handleError(async id => {
        const res = await axios.delete(`${baseURL}/items/${id}`);
        return res.data;
    })
};
