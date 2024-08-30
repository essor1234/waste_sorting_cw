<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="email" v-model="email" placeholder="Email" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { loginUser } from '../helpers';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      loginUser({ email: this.email, password: this.password }).then(response => {
        // Handle login success (e.g., redirect, store token, etc.)
        console.log('Login successful', response.data);
      }).catch(error => {
        // Handle login error
        console.error('Login failed', error);
      });
    }
  }
};
</script>
