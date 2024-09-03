<template>
  <div class="item-container">
    <!-- Item Name (Link) -->
    <a :href="itemLink" class="item-name">{{ itemName }}</a>

    <!-- Edit Button -->
    <button @click="editItem" class="edit-btn">✏️</button>

    <!-- Category -->
    <span class="item-category">{{ itemCategory }}</span>
  </div>
</template>

<script>
export default {
  name: 'ItemComponent',
  props: {
    itemName: {
      type: String,
      required: true
    },
    itemCategory: {
      type: String,
      required: true
    },
    itemLink: {
      type: String,
      default: '#'
    }
  },
  methods: {
    editItem() {
      // Trigger edit action
      this.$emit('edit', this.itemName);
    }
  }
};
</script>

<style scoped>
.item-container {
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.item-name {
  flex-grow: 1;
  color: blue;
  text-decoration: none;
}

.edit-btn {
  margin-left: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

.item-category {
  margin-left: 15px;
  color: grey;
}
</style>