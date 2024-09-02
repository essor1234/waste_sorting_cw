<template>
  <div>
    <h2>New Category</h2>
    <!-- Use the CategoryForm component and bind the save event -->
    <CategoryForm @save="saveCategory" />
  </div>
</template>

<script>
import CategoryForm from '../../components/CategoryForm.vue'; // Adjust the path as necessary
import { api } from '../../helpers/helpers'; // Adjust the path as necessary

export default {
  components: { CategoryForm },
  methods: {
    saveCategory(category) {
      // This assumes that the createCategory function is defined in the api import or as a separate method
      api.createCategory(category) // Use the `createCategory` function from your API helper
        .then(() => {
          this.$router.push('/waste-categories'); // Redirect to the categories list after saving
        })
        .catch(error => {
          console.error('Failed to save category:', error); // Error handling
        });
    }
  }
};
</script>
