<template>
    <div>
      <h2>New Category</h2>
      <CategoryForm @save="saveCategory" />
    </div>
  </template>
  
  <script>
  import CategoryForm from './CategoryForm.vue';
  import { api }  from '../helpers/helpers';
  
  export default {
    components: { CategoryForm },
    methods: {
      saveCategory(category) {
        createCategory(category).then(() => {
          this.$router.push('/categories');
        });
      }
    }
  };
  </script>
  