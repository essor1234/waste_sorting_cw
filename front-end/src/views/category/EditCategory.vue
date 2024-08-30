<template>
    <div>
      <h2>Edit Category</h2>
      <CategoryForm :category="category" @save="saveCategory" />
    </div>
  </template>
  
  <script>
  import CategoryForm from './CategoryForm.vue';
  import { fetchCategoryById, updateCategory } from '../helpers';
  
  export default {
    components: { CategoryForm },
    data() {
      return {
        category: null
      };
    },
    created() {
      this.loadCategory();
    },
    methods: {
      loadCategory() {
        const categoryId = this.$route.params.categoryId;
        fetchCategoryById(categoryId).then(response => {
          this.category = response.data;
        });
      },
      saveCategory(category) {
        updateCategory(this.category._id, category).then(() => {
          this.$router.push('/categories');
        });
      }
    }
  };
  </script>
  