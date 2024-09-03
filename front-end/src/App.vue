<template>
  <div id="app">
    <!-- Conditionally render the navigation bar -->
    <div v-if="showNavbar" class="navbar">
      <div class="ui menu">
        <!-- Logo Section -->
        <div class="header item">
          <img src="black-cat.png" alt="Logo" class="logo" />
        </div>
       <!-- Navigation Links -->
       <router-link to="/main" exact class="menu-item"> Home </router-link>
        <router-link to="/challenges/new" class="menu-item"> Challenges </router-link>
        <router-link to="/wasteManage" class="menu-item"> Start Waste Management </router-link>
        <router-link to="/users/:userId" class="menu-item"> User </router-link>
      </div>
    </div>

    <div class="content">
      <!-- Render the current route's component here -->
      <div class="ui container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    showNavbar() {
      // Hide the navbar on the Welcome, Login, and Register pages
      const hiddenRoutes = ['/welcome', '/users/login', '/users/register'];
      return !hiddenRoutes.includes(this.$route.path);
    }
  }
};
</script>

<style>
/* General layout */
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navbar styling */
.navbar {
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.ui.menu {
  background-color: #2c3e50;
  border: none;
  box-shadow: none;
  width: 100%;
}

.ui.menu .item {
  color: white !important;
  margin-left: 20px;
  font-size: 16px;
}

.ui.menu .item:hover {
  background-color: #34495e !important;
  border-radius: 5px;
}

/* Logo styling */
.logo {
  height: 40px; /* Adjust as needed for your logo size */
  margin-right: 20px;
}

/* Content area */
.content {
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
}

/* Container styling */
.ui.container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.ui.container h1 {
  margin-top: 0;
}
</style>