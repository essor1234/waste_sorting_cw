<template>
    <span class="challenge-tag">{{ challenge.name }} ({{ challenge.level }})</span>
  </template>
  
  <script>
  export default {
    props: {
      challenge: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style>
  .challenge-tag {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  </style>
  