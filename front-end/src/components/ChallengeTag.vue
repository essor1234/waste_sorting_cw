<template>
  <div class="challenge-tag">
    <input v-model="title" placeholder="Challenge title" />
    <textarea v-model="description" placeholder="Description"></textarea>
    <select v-model="level">
      <option value="">Select Level</option>
      <option value="easy">Easy</option>
      <option value="medium">Medium</option>
      <option value="hard">Hard</option>
    </select>
    <input v-model="newTag" @keyup.enter="addTag" placeholder="Add tag" />
    <div class="tags">
      <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
    </div>
    <input v-model="createdBy" placeholder="Created by" />
    <button @click="createChallenge">Create Challenge</button>
  </div>
</template>

<script>
export default {
  name: 'ChallengeTag',
  data() {
    return {
      title: '',
      description: '',
      level: '',
      tags: [],
      newTag: '',
      createdBy: ''
    }
  },
  methods: {
    addTag() {
      if (this.newTag.trim()) {
        this.tags.push(this.newTag.trim())
        this.newTag = ''
      }
    },
    createChallenge() {
      const challenge = {
        title: this.title,
        description: this.description,
        level: this.level,
        tags: this.tags,
        createdBy: this.createdBy
      }
      console.log('Challenge created:', challenge)
      // Here you would typically emit an event with the challenge data
      // or call a method to save it
    }
  }
}
</script>

<style scoped>
.challenge-tag {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: auto;
}
input, textarea, select {
  padding: 5px;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.tag {
  background-color: #e0e0e0;
  padding: 2px 5px;
  border-radius: 3px;
}
</style>