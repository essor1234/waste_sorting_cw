<template>
    <div>
      <h2>Edit User</h2>
      <form @submit.prevent="saveUser">
        <input type="text" v-model="user.name" placeholder="Name" required />
        <input type="email" v-model="user.email" placeholder="Email" required />
        <input type="password" v-model="user.password" placeholder="Password" required />
        <input type="number" v-model="user.wasteScore" placeholder="Waste Score" />
        <button type="submit">Save</button>
      </form>
    </div>
  </template>
  
  <script>
 import { api }  from '../../helpers/helpers';
  export default {
    data() {
      return {
        user: null
      };
    },
    created() {
      this.loadUser();
    },
    methods: {
      loadUser() {
        const userId = this.$route.params.userId;
        fetchUserById(userId).then(response => {
          this.user = response.data;
        });
      },
      saveUser() {
        updateUser(this.user._id, this.user).then(() => {
          this.$router.push('/users');
        });
      }
    }
  };
  </script>
  