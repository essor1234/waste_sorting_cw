<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="category.name" placeholder="Category Name" required />
    <textarea v-model="category.description" placeholder="Category Description"></textarea>
    <input type="text" v-model="category.guideline" placeholder="Guideline" />
    <button type="submit">Save</button>
  </form>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: () => ({ name: '', description: '', guideline: '' })
    }
  },
  methods: {
    handleSubmit() {
      // Emit the 'save' event with the category data
      this.$emit('save', this.category);
    }
  }
};
</script>
