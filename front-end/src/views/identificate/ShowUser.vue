<template>
  <div class="user-profile">
    <h2>User Profile</h2>
    <div v-if="user">
      <div class="profile-field">
        <strong>Username:</strong> {{ user.username }}
      </div>
      <div class="profile-field">
        <strong>Email:</strong> {{ user.email }}
      </div>
      <div class="profile-field">
        <strong>Joined:</strong> {{ formatDate(user.joinDate) }}
      </div>
      <div class="profile-field">
        <strong>Last Login:</strong> {{ formatDate(user.lastLogin) }}
      </div>
    </div>
    <div v-else>
      <p>No user data available.</p>
    </div>
  </div>
</template>

<script>
import { api } from '../../helpers/helpers';
export default {
  name: 'ShowUser',
  props: {
    user: {
      type: Object,
      default: null
    }
  },
  methods: {
    formatDate(date) {
      if (!date) return 'N/A';
      return new Date(date).toLocaleString();
    }
  }
}
</script>

<style scoped>
.user-profile {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

h2 {
  color: #333;
  margin-bottom: 20px;
}

.profile-field {
  margin-bottom: 10px;
}

strong {
  font-weight: bold;
  margin-right: 5px;
}
</style>