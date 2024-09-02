<template>
  <div class="waste-manage-page">
    

    <h1>Waste Manage Page</h1>

    <!-- Add Categories and Items Section -->
    <div class="manage-actions">
      <button @click="addCategory">Add Categories</button>
      <button @click="addItem">Add Items</button>
    </div>

    <!-- Current Items List -->
    <div class="items-list">
      <div
        class="item"
        v-for="item in items"
        :key="item.id"
      >
        <div class="item-details">
          <router-link :to="`/items/${item.id}`">{{ item.name }}</router-link>
          <span>{{ item.category }}</span>
        </div>
        <button @click="editItem(item.id)">Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  data() {
    return {
      items: [
        // Sample data; replace with API call results
        { id: 1, name: 'Item A', category: 'Category 1' },
        { id: 2, name: 'Item B', category: 'Category 2' },
        { id: 3, name: 'Item C', category: 'Category 3' }
      ]
    };
  },
  methods: {
    addCategory() {
      // Logic to add a category
      this.$router.push('/waste-categories/new');
    },
    addItem() {
      // Logic to add an item
      this.$router.push('/waste-items/new');
    },
    editItem(id) {
      // Logic to edit an item
      this.$router.push(`/items/${id}/edit`);
    }
  }
};
</script>

<style scoped>
.waste-manage-page {
  padding: 20px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.navbar a {
  text-decoration: none;
  color: #007bff;
}

h1 {
  text-align: center;
}

.manage-actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

button {
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

button:hover {
  background-color: #218838;
}

.items-list {
  margin-top: 20px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item-details {
  flex-grow: 1;
}

.item-details a {
  font-weight: bold;
  margin-right: 10px;
}

.item-details span {
  color: #6c757d;
}

</style>
