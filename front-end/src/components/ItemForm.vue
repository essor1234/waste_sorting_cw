<template>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="item.name" placeholder="Item Name" required />
      <input type="text" v-model="item.category" placeholder="Category" />
      <textarea v-model="item.instruction" placeholder="Instruction"></textarea>
      <button type="submit">Save</button>
    </form>
  </template>
  
  <script>
    import { api } from '../helpers/helpers';

  export default {
    props: {
      item: {
        type: Object,
        default: () => ({ name: '', category: '', instruction: '' })
      }
    },
    methods: {
      handleSubmit() {
        this.$emit('save', this.item);
      }
    }
  };
  </script>
  