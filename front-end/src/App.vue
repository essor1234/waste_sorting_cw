<template>
  <div id="app">
    <!-- Top Navigation Bar -->
    <div class="navbar">
      <img src="path/to/logo.png" alt="Logo" class="logo" /> <!-- Adjust the src to your logo path -->
      <router-link to="/" exact class="menu-item">Home</router-link>
      <router-link to="/challenges" class="menu-item">Challenges</router-link>
      <router-link to="/start" class="menu-item">Start</router-link>
      <router-link to="/manage" class="menu-item">Manage</router-link>
      <router-link to="/waste" class="menu-item">Waste</router-link>
      <router-link to="/user" class="menu-item">User</router-link>
    </div>

    <!-- Main Content Area -->
    <div class="content">
      <div class="ui conta  iner">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
/* General layout */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Navbar */
.navbar {
  display: flex;
  align-items: center;
  background-color: #2c3e50;
  color: white;
  padding: 10px 20px;
}

.logo {
  height: 40px;
  margin-right: 20px;
}

.menu-item {
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  font-size: 16px;
  transition: background 0.3s;
}

.menu-item:hover {
  background-color: #34495e;
  border-radius: 5px;
}

/* Content area */
.content {
  flex: 1;
  padding: 20px;
  background-color: #ecf0f1;
}

/* Flash message */
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50px;
  right: 0;
}

/* Form and button styles */
input {
  width: 300px;
}

div.label {
  width: 120px;
}

div.input {
  margin-bottom: 10px;
}

button.ui.button {
  margin-top: 15px;
  display: block;
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

.ui.container table {
  margin-top: 20px;
}
</style>
