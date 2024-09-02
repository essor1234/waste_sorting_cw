<template>
    <span class="item-tag">{{ item.name }} ({{ item.category }})</span>
  </template>
  
  <script>
    import { api } from '../helpers/helpers';

  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style>
  .item-tag {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #e9e9e9;
  }
  </style>
  