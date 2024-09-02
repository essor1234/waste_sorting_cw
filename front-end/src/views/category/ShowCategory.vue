<template>
    <div>
      <h2>{{ category.name }}</h2>
      <p>{{ category.description }}</p>
      <p>Guideline: {{ category.guideline }}</p>
      <button @click="editCategory">Edit</button>
      <button @click="deleteCategory">Delete</button>
    </div>
  </template>
  
  <script>
  import { api } from '../../helpers/helpers';
  
  export default {
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
      editCategory() {
        this.$router.push(`/categories/${this.category._id}/edit`);
      },
      deleteCategory() {
        deleteCategory(this.category._id).then(() => {
          this.$router.push('/categories');
        });
      }
    }
  };
  </script>
  