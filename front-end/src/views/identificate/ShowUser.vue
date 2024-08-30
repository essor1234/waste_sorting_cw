<template>
    <div>
      <h2>{{ user.name }}</h2>
      <p>Email: {{ user.email }}</p>
      <p>Waste Score: {{ user.wasteScore }}</p>
      <button @click="editUser">Edit</button>
      <button @click="deleteUser">Delete</button>
    </div>
  </template>
  
  <script>
  import { fetchUserById, deleteUser } from '../helpers'
  
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
      editUser() {
        this.$router.push(`/users/${this.user._id}/edit`);
      },
      deleteUser() {
        deleteUser(this.user._id).then(() => {
          this.$router.push('/users');
        });
      }
    }
  };
  </script>
  