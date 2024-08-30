<template>
    <form @submit.prevent="handleSubmit">
      <input type="text" v-model="challenge.name" placeholder="Challenge Name" required />
      <textarea v-model="challenge.description" placeholder="Description"></textarea>
      <select v-model="challenge.level">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <input type="number" v-model="challenge.score" placeholder="Score" />
      <button type="submit">Save</button>
    </form>
  </template>
  
  <script>
  export default {
    props: {
      challenge: {
        type: Object,
        default: () => ({ name: '', description: '', level: 'easy', score: 0 })
      }
    },
    methods: {
      handleSubmit() {
        this.$emit('save', this.challenge);
      }
    }
  };
  </script>
  