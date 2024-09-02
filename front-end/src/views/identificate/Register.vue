<template>
  <div class="register-form">
    <h2>Register</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import { api }  from '../../helpers/helpers';;
export default {
  name: 'RegisterForm',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    handleSubmit() {
      if (this.password !== this.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      // Here you would typically make an API call to register the user
      console.log('Registration submitted', {
        username: this.username,
        email: this.email,
        password: this.password
      });
      // Reset form after submission
      this.username = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
    }
  }
}
</script>

<style scoped>
.register-form {
  max-width: 300px;
  margin: 0 auto;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #45a049;
}
</style>
