<template>
  <div class="new-item-container">
    <h1>New Item</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="form.title" />
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="form.name" />
      </div>
      <div class="form-group">
        <label for="instruction">Instruction</label>
        <textarea id="instruction" v-model="form.instruction"></textarea>
      </div>
      <div class="form-group">
        <label for="category">Category</label>
        <input type="text" id="category" v-model="form.category" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: '',
        name: '',
        instruction: '',
        category: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      console.log("Form submitted:", this.form);
    }
  }
};
</script>

<style scoped>
.new-item-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
