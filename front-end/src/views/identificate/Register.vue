<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <input type="text" v-model="name" placeholder="Name" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { registerUser } from '../helpers';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      };
    },
    methods: {
      register() {
        registerUser({ name: this.name, email: this.email, password: this.password }).then(response => {
          // Handle registration success (e.g., redirect, login, etc.)
          console.log('Registration successful', response.data);
        }).catch(error => {
          // Handle registration error
          console.error('Registration failed', error);
        });
      }
    }
  };
  </script>
  